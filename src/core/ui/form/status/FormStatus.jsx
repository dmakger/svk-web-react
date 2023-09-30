import React from 'react';
import cl from './_FormStatus.module.scss';
import Text20B from '../../text/20/Text20B';

const FormStatus = ({isSent, hasError, titleError, titleSuccess, className, ...props}) => {

    if (isSent && !hasError) {
        return (
            <Text20B className={`${className} ${cl.complete}`} {...props}>{titleSuccess}</Text20B>
        )
    } else if (isSent && hasError) {
        return (
            <Text20B className={`${className} ${cl.error}`} {...props}>{titleError}</Text20B>
        );
    }
};

export default FormStatus;