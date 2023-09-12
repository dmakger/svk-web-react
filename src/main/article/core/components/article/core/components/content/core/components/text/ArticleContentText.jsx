import React from 'react';
import cl from './_ArticleContentText.module.scss';
import ArticleImage from './core/components/image/ArticleImage';

const ArticleContentText = ({image, content, className, ...props}) => {
    return (
        <div>
            <ArticleImage image={image} />
            <p className={cl.content} dangerouslySetInnerHTML={{__html: content}} />
        </div>
    );
};

export default ArticleContentText;