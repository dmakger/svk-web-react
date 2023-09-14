import React from 'react';
import { ROW_TYPE } from '../../service/typeFormData';
import FormItemRow from '../row/FormItemRow'

const SubmitApplicationFormAuto = ({type, content, className, ...props}) => {
    if (type === ROW_TYPE) {
        <FormItemRow />
    }
};

export default SubmitApplicationFormAuto;