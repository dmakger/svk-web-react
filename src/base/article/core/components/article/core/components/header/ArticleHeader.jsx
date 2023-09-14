import React from 'react';
import cl from './_ArticleHeader.module.scss';

import ArticleHeaderText from './core/components/text/ArticleHeaderText'
import ArticleHeaderInfo from './core/components/info/ArticleHeaderInfo';

const ArticleHeader = ({title, description, writer, brand, tags, className, ...props}) => {
    return (
        <div className={`${cl.header} ${className}`} {...props}>
            <ArticleHeaderText title={title}
                               description={description}
                               className={cl.text}/>
            {(writer || brand || tags) && (
                <ArticleHeaderInfo writer={writer}
                                   brand={brand}
                                   tags={tags}
                                   className={cl.info}/>
            )}

        </div>
    );
};

export default ArticleHeader;