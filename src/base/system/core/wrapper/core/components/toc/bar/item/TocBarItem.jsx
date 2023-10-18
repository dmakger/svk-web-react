import React from 'react';
import cl from './_TocBarItem.module.scss';
import {cls} from "../../../../../../../../../core/service/cls";

const TocBarItem = ({title, list, path, className, ...props}) => {
    
    return (
        <div className={cls(cl.block, className)} {...props}>
            
        </div>
    );
};

export default TocBarItem;