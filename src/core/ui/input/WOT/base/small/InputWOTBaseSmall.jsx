import React from 'react';
import cl from "./_InputWOTBaseSmall.module.scss";
import {cls} from "../../../../../service/cls";
import InputWOTBase from "../InputWOTBase";

const InputWOTBaseSmall = ({data, className, ...props}) => {
    return (
        <InputWOTBase data={data} className={cls(cl.size, className)} {...props}/>
    )
};

export default InputWOTBaseSmall;