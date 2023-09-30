import React from 'react';
import {LARGE_SIZE, SMALL_SIZE} from "../sizeFormData";
import InputWTBaseSmall from "../../input/WT/base/small/InputWTBaseSmall";
import InputWTBaseLarge from "../../input/WT/base/large/InputWTBaseLarge";

const FormItemText = ({other, type, data, className, ...props}) => {
    if (other.size === SMALL_SIZE) {
        return <InputWTBaseSmall type={type} data={data} className={className} {...props}/>
    }
    if (other.size === LARGE_SIZE) {
        return <InputWTBaseLarge type={type} data={data} className={className} {...props}/>
    }

    return <InputWTBaseLarge type={type} data={data} className={className} {...props}/>
};

export default FormItemText;