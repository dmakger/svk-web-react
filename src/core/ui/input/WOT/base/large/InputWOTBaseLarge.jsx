import React from 'react';
import cl from "./_InputWOTBaseLarge.module.scss";
import {cls} from "../../../../../service/cls";
import InputWOTBase from "../InputWOTBase";

const InputWOTBaseLarge = ({data, className, ...props}) => {
    return (
        <InputWOTBase data={data} className={cls(cl.size, className)} {...props}/>
    )
};

export default InputWOTBaseLarge;