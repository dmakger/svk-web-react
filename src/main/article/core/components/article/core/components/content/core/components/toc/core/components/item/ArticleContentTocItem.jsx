import React from 'react';
import cl from './_ArticleContentTocItem.module.scss';
import Text20M from '../../../../../../../../../../../../../../core/ui/text/20/Text20M';
import { classes } from '../../../../../../../../../../../../../../core/service/classes';

const ArticleContentTocItem = ({title, active, className, classNameItem, ...props}) => {

    return (
        <div className={classes(className, cl.item, active === title ? cl.active : '')}>
            <div className={cl.block} />
            <Text20M className={classes(cl.title, classNameItem)} {...props}>{title}</Text20M>
        </div>
    );
};

export default ArticleContentTocItem;