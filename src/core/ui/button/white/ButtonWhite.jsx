import React from 'react';
import cl from "./_ButtonWhite.module.scss";
import Text24B from "../../text/24/Text24B";
import {cls} from "../../../service/cls";

const ButtonWhite = ({title, type, className, classNameTitle, ...props}) => {
    return (
        <button type={type} className={`${className} ${cl.button}`} {...props}>
            <Text24B className={cls(classNameTitle, cl.title)}>{title}</Text24B>
        </button>
    );
};

export default ButtonWhite;