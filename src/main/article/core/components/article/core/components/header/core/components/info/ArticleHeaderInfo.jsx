import React from 'react';
import cl from './_ArticleHeaderInfo.module.scss';

import ArticleHeaderInfoWriter from './core/components/writer/ArticleHeaderInfoWriter';
import ArticleHeaderInfoBrand from './core/components/brand/ArticleHeaderInfoBrand';
import ArticleHeaderInfoTags from './core/components/tags/ArticleHeaderInfoTags';

const ArticleHeaderInfo = ({writer, brand, tags, className, ...props}) => {
    return (
        <div className={`${className} ${cl.info}`} {...props}>
            {writer &&
                <ArticleHeaderInfoWriter writer={writer} />
            }
            {brand &&
                <ArticleHeaderInfoBrand brand={brand} />
            }
            {tags &&
                <ArticleHeaderInfoTags tags={tags} />
            }
        </div>
    );
};

export default ArticleHeaderInfo;