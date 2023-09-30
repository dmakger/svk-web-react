import React from 'react';
import InputCheckboxWOT from "../../input/WOT/checkbox/InputCheckboxWOT";

const FormItemCheckbox = ({type, data, className, ...props}) => {
    return (
        <InputCheckboxWOT type={type} data={data} className={className} {...props}/>
    );
};

export default FormItemCheckbox;