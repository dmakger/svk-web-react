import React, {useRef, useState} from 'react';
import cl from './_BugForm.module.scss';
import FormItemAuto from "../../../../../../../../../core/ui/form/auto/FormItemAuto";
import {formData} from "./core/service/formData";
import {createRequestAboutBug} from "../../../../../../../api/bugsAPI";
import FormStatus from "../../../../../../../../../core/ui/form/status/FormStatus";

const BugForm = ({setIsActive, className, ...props}) => {
    const formRef = useRef(null)
    const [hasError, setHasError] = useState(false)
    const [isSent, setIsSent] = useState(false)
    const handleOnSubmit = (e) => {
        if (e)
            e.preventDefault();

        if (formRef.current) {
            setIsSent(false)
            const formData = new FormData(formRef.current)
            const tempDataStorage = {}
            formData.forEach((value, key) => {
                tempDataStorage[key] = value
            })
            createRequestAboutBug(tempDataStorage).then(() => {
                setHasError(false)
                setIsSent(true)
                formData.forEach((value, key) => {
                    formRef.current.querySelector(`[name=${key}]`).value = ''
                })
                setTimeout(() => {
                    setIsActive(false)
                    setIsSent(false)
                }, 500)
            }, () => {
                setHasError(true)
                setIsSent(true)
            })
        }
    }

    return (
        <form ref={formRef} onSubmit={e => handleOnSubmit(e)} className={className} {...props}>
            {formData.map((it, index) => (
                <FormItemAuto key={index} other={it.other} type={it.type} data={it.data}/>
            ))}
            <FormStatus isSent={isSent}
                        hasError={hasError}
                        titleSuccess={'Заявка успешно отправлена'}
                        titleError={'Внимательно проверьте форму'}
                        className={cl.status} />
        </form>
    );
};

export default BugForm;