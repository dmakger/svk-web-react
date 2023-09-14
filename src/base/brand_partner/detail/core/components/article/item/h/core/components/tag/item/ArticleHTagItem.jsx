import React from 'react';
import cl from './_ArticleHTagItem.module.scss'

import Text20M from '../../../../../../../../../../../../core/ui/text/20/Text20M'

const ArticleHTagItem = ({title, className, ...props}) => {
    return (
        <div className={`${className} ${cl.tag}`} {...props}>
            <Text20M className={cl.title}>{title}</Text20M>
        </div>
    );
};

export default ArticleHTagItem;