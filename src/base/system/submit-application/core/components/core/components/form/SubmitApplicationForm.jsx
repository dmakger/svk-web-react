import React from 'react';
import {formData} from './core/service/formData'
import FormItemAuto from "./core/components/auto/FormItemAuto";

const SubmitApplicationForm = ({className, ...props}) => {
    return (
        <div className={className} {...props}>
            {formData.map((it, index) => (
                <FormItemAuto key={index} type={it.type} data={it.data} />
            ))}
        </div>
    );
};

export default SubmitApplicationForm;