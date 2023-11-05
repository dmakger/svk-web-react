import React from 'react';
import cl from './_Article.module.scss';

import ArticleHeader from './core/components/header/ArticleHeader';
import ArticleContent from './core/components/content/ArticleContent';

const Article = ({title, linkVideo, description, writer, brand, tags, image, dateAt, content, className, ...props}) => {
    return (
        <div className={`${cl.article} ${className}`} {...props}>
            <ArticleHeader title={title}
                           description={description}
                           writer={writer}
                           brand={brand}
                           tags={tags}/>
            <ArticleContent image={image}
                            content={content}
                            linkVideo={linkVideo}
                            className={cl.content}/>
        </div>
    );
};

export default Article;