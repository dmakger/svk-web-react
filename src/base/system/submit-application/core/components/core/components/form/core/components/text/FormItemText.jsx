import React from 'react';
import InputWTBase from "../../../../../../../../../../../core/ui/input/WT/base/InputWTBase";

const FormItemText = ({type, data, className, ...props}) => {
    return (
        <InputWTBase type={type} data={data} className={className} {...props}/>
    );
};

export default FormItemText;