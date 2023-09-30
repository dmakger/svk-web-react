import React from 'react';
import cl from './_ArticleContentTocList.module.scss';
import { cls } from '../../../../../../../../../../../../../../core/service/cls';
import ArticleContentTocItem from '../item/ArticleContentTocItem';


const ArticleContentTocList = ({ list, activeHeadingIndex, className, classNameItem, onItemClick, isScrollingInProgress, ...props }) => {
    return (
        <div className={cls(className, cl.list)} {...props}>
            {list.map((it, index) => (
                <ArticleContentTocItem
                    key={it}
                    index={index}
                    activeHeadingIndex={activeHeadingIndex}
                    title={it}
                    classNameItem={classNameItem}
                    onItemClick={onItemClick}
                    isScrollingInProgress={isScrollingInProgress}
                />
            ))}
        </div>
    );
};

export default ArticleContentTocList;