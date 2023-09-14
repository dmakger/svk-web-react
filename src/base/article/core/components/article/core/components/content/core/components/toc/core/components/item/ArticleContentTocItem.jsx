import React from 'react';
import cl from './_ArticleContentTocItem.module.scss';
import { classes } from '../../../../../../../../../../../../../../core/service/classes';

const ArticleContentTocItem = ({title, active, className, classNameItem, ...props}) => {

    return (
        <div className={classes(className, cl.item, active === title ? cl.active : '')}>
            <div className={cl.block} />
            <p className={classes(cl.title, classNameItem)} dangerouslySetInnerHTML={{__html: title}} {...props}/>
            {/*<Text20M className={classes(cl.title, classNameItem)} >{title}</Text20M>*/}
        </div>
    );
};

export default ArticleContentTocItem;