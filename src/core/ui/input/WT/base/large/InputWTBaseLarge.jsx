import React from 'react';
import WrapperWT from "../../core/components/wrapper/WrapperWT";
import cl from "../_InputWTBase.module.scss";
import clLarge from "./_InputWTBaseLarge.module.scss";
import {LARGE_SIZE} from "../../../../form/sizeFormData";
import {cls} from "../../../../../service/cls";
import InputWOTBaseLarge from "../../../WOT/base/large/InputWOTBaseLarge";

const InputWTBaseLarge = ({type, data, className,  ...props}) => {
    return (
        <WrapperWT size={LARGE_SIZE} title={data.title}
                   className={cls(clLarge.wrapper, className)} classNameTitle={clLarge.title} {...props}>
            <InputWOTBaseLarge type={type} data={data} className={cl.input} />
        </WrapperWT>
    )
};

export default InputWTBaseLarge;