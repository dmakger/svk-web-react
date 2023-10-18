import React from 'react';
import cl from './_TocBarList.module.scss';
import {cls} from "../../../../../../../../../core/service/cls";
import TocBarItem from "../item/TocBarItem";

const TocBarList = ({toc, className, ...props}) => {
    return (
        <div className={cls(cl.block, className)} {...props}>
            {toc.map(it => (
                <TocBarItem path={it.path}
                            title={it.title}
                            list={it.list}
                            key={it.id}/>
            ))}
        </div>
    );
};

export default TocBarList;