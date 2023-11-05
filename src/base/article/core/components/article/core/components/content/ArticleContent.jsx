import React, {useState} from 'react';
import cl from './_ArticleContent.module.scss';
import ArticleContentToc from './core/components/toc/ArticleContentToc';
import ArticleContentText from './core/components/text/ArticleContentText';

const ArticleContent = ({image, content, linkVideo, className, ...props}) => {
    const [activeHeadingIndex, setActiveHeadingIndex] = useState(0);

    return (
        <div className={`${className} ${cl.content}`} {...props}>
            <ArticleContentText
                image={image}
                content={content}
                className={cl.text}
                setActiveHeadingIndex={setActiveHeadingIndex}
            />
            <ArticleContentToc
                content={content}
                activeHeadingIndex={activeHeadingIndex}
                className={cl.toc}
                classNameItem={cl.tocItem}
                linkVideo={linkVideo}
                onItemClick={setActiveHeadingIndex}
            />
        </div>
    );
};


export default ArticleContent;