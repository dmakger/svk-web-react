import React from 'react';
import cl from './_TOCList.module.scss';
import DetailedTOC from "../item/DetailedTOC";

const TOCList = ({toc, className, ...props}) => {
    return (
        <div className={cl.block}>
            <div className={`${className} ${cl.list}`} {...props}>
                {toc.map(it => (
                    <DetailedTOC key={it.id}
                                 path={it.path}
                                 title={it.title}
                                 list={it.pages}/>
                ))}
            </div>
        </div>
    );
};

export default TOCList;