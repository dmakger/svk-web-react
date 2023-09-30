import React from 'react';
import {LARGE_SIZE, SMALL_SIZE} from "../sizeFormData";
import TextAreaWTSmall from "../../input/WT/textarea/small/TextAreaWTSmall";
import TextAreaWTLarge from "../../input/WT/textarea/large/TextAreaWTLarge";

const FormItemTextArea = ({other, type, data, className, ...props}) => {
    if (other.size === SMALL_SIZE) {
        return <TextAreaWTSmall type={type} data={data} className={className} {...props}/>
    }
    if (other.size === LARGE_SIZE) {
        return <TextAreaWTLarge type={type} data={data} className={className} {...props}/>
    }

    return <TextAreaWTLarge type={type} data={data} className={className} {...props}/>
};

export default FormItemTextArea;