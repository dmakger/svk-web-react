import React, { useState } from 'react';
import cl from './_FormStatus.module.scss';
import Text20B from '../../../../../../../../../../../core/ui/text/20/Text20B';

const FormStatus = ({isSent, hasError, text, className, ...props}) => {

    
    if (isSent && !hasError) {
        return (
            <Text20B className={`${className} ${cl.complete}`}>Заявка успешно отправлена</Text20B>
        )
    } else if (isSent && hasError) {
        return (
            <Text20B className={`${className} ${cl.error}`}>Внимательно проверьте форму</Text20B>
        );
    }
};

export default FormStatus;