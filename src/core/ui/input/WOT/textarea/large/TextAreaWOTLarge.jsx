import React from 'react';
import cl from "./_TextAreaWOTLarge.module.scss";
import {cls} from "../../../../../service/cls";
import TextAreaWOT from "../TextAreaWOT";

const TextAreaWotLarge = ({data, className, ...props}) => {
    return (
        <TextAreaWOT data={data} className={cls(cl.size, className)} {...props}/>
    )
};

export default TextAreaWotLarge;