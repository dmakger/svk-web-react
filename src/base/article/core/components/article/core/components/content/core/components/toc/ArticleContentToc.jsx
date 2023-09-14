import React from 'react';
import cl from './_ArticleContentToc.module.scss';

import Text20B from '../../../../../../../../../../../core/ui/text/20/Text20B';
import ArticleContentTocList from './core/components/list/ArticleContentTocList';

const ArticleContentToc = ({content, activeHeading, className, classNameItem, ...props}) => {
    const list = getTocList(content)

    if (list.length === 0) return

    return (
        <div className={className}>
            <div className={cl.toc} {...props}>
                <Text20B>Содержание:</Text20B>
                <ArticleContentTocList list={list} activeHeading={activeHeading} classNameItem={classNameItem} />
            </div>
        </div>
    );
};

const getTocList = (content) => {
    const regex = /<h2[^>]*>(.*?)<\/h2>/g;
    const data = [];
    let el;
    while ((el = regex.exec(content)) !== null) {
        data.push(el[1]);
    }
    return data
}

export default ArticleContentToc;