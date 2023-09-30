import React, {useRef, useState} from 'react';
import cl from './_SubmitApplicationForm.module.scss';
import {formData} from './core/service/formData'
import FormItemAuto from "../../../../../../../../core/ui/form/auto/FormItemAuto";
import {getData} from "./core/service/service";
import FormStatus from '../../../../../../../../core/ui/form/status/FormStatus';

const SubmitApplicationForm = ({className, ...props}) => {
    const formRef = useRef(null)
    const [hasError, setHasError] = useState(false)
    const [isSent, setIsSent] = useState(false)

    const handleOnSubmit = (e) => {
        if(e)
            e.preventDefault();

        if(formRef.current){
            setIsSent(false)
            const formData = new FormData(formRef.current)
            const tempDataStorage = {}
            formData.forEach((value, key) => {
                tempDataStorage[key] = value
            })
            if (tempDataStorage.approval !== 'on') {
                setHasError(true)
                setIsSent(true)
            } else {
                getData(tempDataStorage).then(r => {
                    setHasError(r.hasError)
                    setIsSent(true)
                }, er => {
                    setHasError(er.hasError)
                    setIsSent(true)
                })
            }
        }
    }

    return (
        <form ref={formRef} className={`${className} ${cl.form}`} {...props} onSubmit={e => handleOnSubmit(e)}>
            {formData.map((it, index) => (
                <FormItemAuto key={index} other={it.other} type={it.type} data={it.data} />
            ))}
            <FormStatus isSent={isSent} 
                        hasError={hasError}
                        titleSuccess={'Заявка успешно отправлена'}
                        titleError={'Внимательно проверьте форму'}
                        className={cl.status} />
        </form>
    );
};

export default SubmitApplicationForm;