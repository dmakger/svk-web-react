import React from 'react';
import cl from "./_WrapperButtom.module.scss";
import {cls} from "../../../../../../service/cls";

const WrapperButton = ({className, children, ...props}) => {
    return (
        <div className={cls(cl.row, className)} {...props}>
            {children}
        </div>
    );
};

export default WrapperButton;