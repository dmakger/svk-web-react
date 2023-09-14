import React from 'react';

import ArticleHeaderInfoItem from '../core/components/item/ArticleHeaderInfoItem';
import Text20M from '../../../../../../../../../../../../../../core/ui/text/20/Text20M';


const ArticleHeaderInfoTags = ({tags, className, ...props}) => {
    const tagsF = [];
    for (let tag of tags)
        tagsF.push(tag.title)

    return (
        <ArticleHeaderInfoItem title={'Теги'} className={className} {...props}>
            <Text20M>{tagsF.join(', ')}</Text20M>
        </ArticleHeaderInfoItem>
    );
};

export default ArticleHeaderInfoTags;