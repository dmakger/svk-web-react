import React from 'react';
import cl from './_BugButton.module.scss'
import bugSVG from "../../../../../../../../../core/static/img/bug-fill-white.svg";
import {cls} from "../../../../../../../../../core/service/cls";

const BugButton = ({className, ...props}) => {
    return (
        <div className={cls(cl.button, className)} {...props}>
            <img className={cl.image} src={bugSVG} alt="bug"/>
        </div>
    );
};

export default BugButton;