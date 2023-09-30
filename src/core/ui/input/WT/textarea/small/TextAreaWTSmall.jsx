import React from 'react';
import cl from "../_TextAreaWT.module.scss";
import clSmall from "./_TextAreaWtSmall.module.scss";
import {cls} from "../../../../../service/cls";
import {SMALL_SIZE} from "../../../../form/sizeFormData";
import TextAreaWOTSmall from "../../../WOT/textarea/small/TextAreaWOTSmall";
import WrapperWT from "../../core/components/wrapper/WrapperWT";

const TextAreaWtSmall = ({type, data, className,  ...props}) => {
    return (
        <WrapperWT size={SMALL_SIZE} title={data.title}
                   className={cls(clSmall.wrapper, className)} classNameTitle={clSmall.title} {...props}>
            <TextAreaWOTSmall data={data} className={cl.textarea}/>
        </WrapperWT>
    )
};

export default TextAreaWtSmall;