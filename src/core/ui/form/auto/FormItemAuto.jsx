import React from 'react';
import {BUTTON_TYPE, CHECKBOX_TYPE, ROW_TYPE, TEXTAREA_TYPE} from '../typeFormData';
import FormItemRow from '../row/FormItemRow'
import FormItemText from "../text/FormItemText";
import FormItemCheckbox from "../checkbox/FormItemCheckbox";
import FormItemButton from "../button/FormItemButton";
import FormItemTextArea from "../textarea/FormItemTextArea";

const FormItemAuto = ({other, type, data, className, ...props}) => {
    if (type === ROW_TYPE) {
        return <FormItemRow other={other} data={data} className={className} {...props} />
    }
    if (type === CHECKBOX_TYPE) {
        return <FormItemCheckbox other={other} type={type} data={data} className={className} {...props} />
    }
    if (type === BUTTON_TYPE) {
        return <FormItemButton other={other} type={type} data={data} className={className} {...props} />
    }
    if (type === TEXTAREA_TYPE) {
        return <FormItemTextArea other={other} type={type} data={data} className={className} {...props} />
    }
    return <FormItemText other={other} type={type} data={data} className={className} {...props} />
};

export default FormItemAuto;