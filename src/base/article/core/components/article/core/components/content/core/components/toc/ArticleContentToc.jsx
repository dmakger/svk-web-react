import React from 'react';
import cl from './_ArticleContentToc.module.scss';

import Text20B from '../../../../../../../../../../../core/ui/text/20/Text20B';
import ArticleContentTocList from './core/components/list/ArticleContentTocList';
import IframeVideo from "../../../../../../../../../../../core/ui/iframe/video/IframeVideo";
import {cls} from "../../../../../../../../../../../core/service/cls";

const ArticleContentToc = ({ content, activeHeadingIndex, linkVideo, className, classNameItem, onItemClick, isScrollingInProgress, ...props }) => {
    const list = getTocList(content);

    if (list.length === 0) return null;

    return (
        <div className={className} {...props}>
            <div className={cl.wrapper}>
                <div className={cl.block}>
                    <Text20B>Содержание:</Text20B>
                    <ArticleContentTocList
                        list={list}
                        activeHeadingIndex={activeHeadingIndex}
                        classNameItem={classNameItem}
                        onItemClick={onItemClick}
                        isScrollingInProgress={isScrollingInProgress}
                    />
                </div>
                {linkVideo &&
                    <div className={cl.block}>
                        <Text20B>Видео:</Text20B>
                        <IframeVideo src={linkVideo} className={cl.video}/>
                    </div>
                }
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
    return data;
};

export default ArticleContentToc;