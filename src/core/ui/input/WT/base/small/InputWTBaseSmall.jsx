import React from 'react';
import cl from "../_InputWTBase.module.scss";
import clSmall from "./_InputWTBaseSmall.module.scss";
import {cls} from "../../../../../service/cls";
import {SMALL_SIZE} from "../../../../form/sizeFormData";
import WrapperWT from "../../core/components/wrapper/WrapperWT";
import InputWOTBaseSmall from "../../../WOT/base/small/InputWOTBaseSmall";

const InputWTBaseSmall = ({type, data, className,  ...props}) => {
    return (
        <WrapperWT size={SMALL_SIZE} title={data.title}
                   className={cls(clSmall.wrapper, className)} classNameTitle={clSmall.title} {...props}>
            <InputWOTBaseSmall type={type} data={data} className={cl.input} />
        </WrapperWT>
    )
};

export default InputWTBaseSmall;