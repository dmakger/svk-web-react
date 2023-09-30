import React from 'react';
import WrapperWT from "../../core/components/wrapper/WrapperWT";
import cl from "../_TextAreaWT.module.scss";
import clLarge from "./_TextAreaWTLarge.module.scss";
import {LARGE_SIZE} from "../../../../form/sizeFormData";
import TextAreaWOTLarge from "../../../WOT/textarea/large/TextAreaWOTLarge";
import {cls} from "../../../../../service/cls";

const TextAreaWTLarge = ({type, data, className,  ...props}) => {
    return (
        <WrapperWT size={LARGE_SIZE} title={data.title}
                   className={cls(clLarge.wrapper, className)} classNameTitle={clLarge.title} {...props}>
            <TextAreaWOTLarge data={data} className={cl.textarea}/>
        </WrapperWT>
    )
};

export default TextAreaWTLarge;