import React from 'react';
import cl from './_ArticleHTagList.module.scss';
import ArticleHTagItem from '../item/ArticleHTagItem';

const ArticleHTagList = ({list, className, ...props}) => {
    return (
        <div className={`${className} ${cl.list}`} {...props}>
            {list.map(it => (
                <ArticleHTagItem key={it.title} title={it.title} />
            ))}
        </div>
    );
};

export default ArticleHTagList;