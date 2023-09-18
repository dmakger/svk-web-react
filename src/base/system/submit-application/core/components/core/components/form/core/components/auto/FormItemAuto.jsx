import React from 'react';
import {BUTTON_TYPE, CHECKBOX_TYPE, ROW_TYPE} from '../../service/typeFormData';
import FormItemRow from '../row/FormItemRow'
import FormItemText from "../text/FormItemText";
import FormItemCheckbox from "../checkbox/FormItemCheckbox";
import FormItemButton from "../button/FormItemButton";

const FormItemAuto = ({type, data, className, ...props}) => {
    if (type === ROW_TYPE) {
        return <FormItemRow data={data} className={className} {...props} />
    }
    if (type === CHECKBOX_TYPE) {
        return <FormItemCheckbox type={type} data={data} className={className} {...props} />
    }
    if (type === BUTTON_TYPE) {
        return <FormItemButton type={type} data={data} className={className} {...props} />
    }
    return <FormItemText type={type} data={data} className={className} {...props} />
};

export default FormItemAuto;