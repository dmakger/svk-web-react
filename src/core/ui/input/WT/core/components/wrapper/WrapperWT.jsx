import React from 'react';
import cl from "./_WrapperWT.module.scss";
import WrapperWtText from "./core/components/text/WrapperWTText";
import {cls} from "../../../../../../service/cls";

const WrapperWT = ({title, size, className, classNameTitle, children, ...props}) => {
    return (
        <label className={`${className} ${cl.block}`} {...props}>
            <WrapperWtText size={size} title={title} className={cls(classNameTitle, cl.title)}/>
            {children}
        </label>
    );
};

export default WrapperWT;