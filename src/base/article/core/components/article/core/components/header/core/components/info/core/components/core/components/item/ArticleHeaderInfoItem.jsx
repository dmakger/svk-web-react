import React from 'react';
import cl from './_ArticleHeaderInfoItem.module.scss'
import Text20M from '../../../../../../../../../../../../../../../../core/ui/text/20/Text20M';

const ArticleHeaderInfoItem = ({title, className, children, ...props}) => {
    return (
        <div className={`${cl.block} ${className}`} {...props}>
            <Text20M className={cl.title}>{title}:</Text20M>
            {children}
        </div>
    );
};

export default ArticleHeaderInfoItem;