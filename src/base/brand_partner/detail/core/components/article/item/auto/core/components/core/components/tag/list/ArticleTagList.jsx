import React from 'react';
import cl from './_ArticleTagList.module.scss';
import ArticleTagItem from '../item/ArticleTagItem';

const ArticleTagList = ({list, className, ...props}) => {
    return (
        <div className={`${className} ${cl.list}`} {...props}>
            {list.map(it => (
                <ArticleTagItem key={it.title} title={it.title} />
            ))}
        </div>
    );
};

export default ArticleTagList;