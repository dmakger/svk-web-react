import React from 'react';
import cl from './_ArticleTagItem.module.scss'

import Text15M from '../../../../../../../../../../../../../../core/ui/text/15/Text15M'

const ArticleTagItem = ({title, className, ...props}) => {
    return (
        <div className={`${className} ${cl.tag}`} {...props}>
            <Text15M className={cl.title}>{title}</Text15M>
        </div>
    );
};

export default ArticleTagItem;