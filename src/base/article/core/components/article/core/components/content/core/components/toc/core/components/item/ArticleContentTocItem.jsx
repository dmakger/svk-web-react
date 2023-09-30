import React from 'react';
import cl from './_ArticleContentTocItem.module.scss';
import {cls} from '../../../../../../../../../../../../../../core/service/cls';


const ArticleContentTocItem = ({ index, activeHeadingIndex, title, className, classNameItem, onItemClick, isScrollingInProgress, ...props }) => {
    const isActive = index === activeHeadingIndex;

    const handleItemClick = () => {
        if (!isScrollingInProgress) {
            setTimeout(() => {
                onItemClick(index);
            }, 1000);
            const headingOffset = document.querySelectorAll("h2")[index].offsetTop - 120;
            window.scrollTo({ top: headingOffset, behavior: "smooth" });
        }
    };

    return (
        <div
            className={cls(className, cl.item, isActive ? cl.active : '')}
            onClick={handleItemClick}
        >
            <div className={cl.block} />
            <p className={cls(cl.title, classNameItem)} dangerouslySetInnerHTML={{ __html: title }} {...props} />
        </div>
    );
};

export default ArticleContentTocItem;