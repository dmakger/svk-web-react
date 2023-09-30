import React from 'react';
import {BLUE_BUTTON_COLOR, WHITE_BUTTON_COLOR} from "../typeFormData";
import FormItemButtonWhite from "./white/FormItemButtonWhite";
import FormItemButtonBlue from "./blue/FormItemButtonBlue";

const FormItemButton = ({type, data, other, className, ...props}) => {
    if (other.color === WHITE_BUTTON_COLOR)
        return <FormItemButtonWhite data={data} other={other} className={className} {...props}/>
    if (other.color === BLUE_BUTTON_COLOR)
        return <FormItemButtonBlue data={data} other={other} className={className} {...props}/>

    return <FormItemButtonBlue data={data} other={other} className={className} {...props}/>
};

export default FormItemButton;