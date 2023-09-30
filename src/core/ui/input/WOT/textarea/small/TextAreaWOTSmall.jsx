import React from 'react';
import cl from "./_TextAreaWotSmall.module.scss";
import {cls} from "../../../../../service/cls";
import TextAreaWOT from "../TextAreaWOT";

const TextAreaWotSmall = ({data, className, ...props}) => {
    return (
        <TextAreaWOT data={data} className={cls(cl.size, className)} {...props}/>
    )
};

export default TextAreaWotSmall;