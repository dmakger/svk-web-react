import React from 'react';
import cl from './_ArticleContentTocList.module.scss';
import { classes } from '../../../../../../../../../../../../../../core/service/classes';
import ArticleContentTocItem from '../item/ArticleContentTocItem';

const ArticleContentTocList = ({list, activeHeading, className, classNameItem, ...props}) => {
    return (
        <div className={classes(className, cl.list)} {...props}>
            {list.map(it => (
                <ArticleContentTocItem key={it} active={activeHeading} title={it} classNameItem={classNameItem} />
            ))}
        </div>
    );
};

export default ArticleContentTocList;