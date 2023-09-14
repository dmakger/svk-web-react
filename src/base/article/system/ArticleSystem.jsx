import React from 'react';
import cl from "../core/components/article/_Article.module.scss";
import ArticleHeader from "../core/components/article/core/components/header/ArticleHeader";

const ArticleSystem = ({title, description, writer, brand, tags, dateAt, className, classNameContent, children, ...props}) => {
    return (
        <div className={`${cl.article} ${className}`} {...props}>
            <ArticleHeader title={title}
                           description={description}
                           writer={writer}
                           brand={brand}
                           tags={tags} />
            <div className={`${cl.content} ${classNameContent}`}>
                {children}
            </div>
        </div>
    );
};

export default ArticleSystem;