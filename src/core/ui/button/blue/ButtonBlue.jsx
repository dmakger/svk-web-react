import React from 'react';
import cl from './_ButtonBlue.module.scss'
import Text24B from "../../text/24/Text24B";

const ButtonBlue = ({title, className, ...props}) => {
    return (
        <button type={"submit"} className={`${className} ${cl.button}`} {...props}>
            <Text24B className={cl.title}>{title}</Text24B>
        </button>
    );
};

export default ButtonBlue;