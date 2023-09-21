import React, {useRef} from 'react';
import {formData} from './core/service/formData'
import FormItemAuto from "./core/components/auto/FormItemAuto";
import {createClientPOST, submitApplicationPOST} from "../../../../../../../core/api/clientAPI";
import {getClientData, getData, getServicesPackageData} from "./core/service/service";

const SubmitApplicationForm = ({className, ...props}) => {
    const formRef = useRef(null)

    const handleOnSubmit = (e) => {
        if(e)
            e.preventDefault();

        if(formRef.current){
            const formData = new FormData(formRef.current)
            const tempDataStorage = {}
            formData.forEach((value, key) => {
                tempDataStorage[key] = value
            })
            createClientPOST(getClientData(tempDataStorage)).then(
                r => {
                    console.log('YES', r)
                }, er => {
                    console.log('NO', er)
                }
            )
            // console.log(tempDataStorage)
            // console.log(getClientData(tempDataStorage))
            // console.log(getServicesPackageData(tempDataStorage, 1))
            submitApplicationPOST(getServicesPackageData(tempDataStorage, 1)).then(
                r => {
                    console.log('YES', r)
                }, er => {
                    console.log('NO', er)
                }
            )
            // getData(tempDataStorage).then(r => {
            //     console.log('YES', r)
            // }, er => {
            //     console.log('NO', er)
            // })
        }
    }

    return (
        <form ref={formRef} className={className} {...props} onSubmit={e => handleOnSubmit(e)}>
            {formData.map((it, index) => (
                <FormItemAuto key={index} type={it.type} data={it.data} />
            ))}
        </form>
    );
};

export default SubmitApplicationForm;