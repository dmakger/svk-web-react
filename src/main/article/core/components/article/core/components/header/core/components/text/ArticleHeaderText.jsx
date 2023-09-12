import React from 'react';
import cl from './_ArticleHeaderText.module.scss';

import Text96M from '../../../../../../../../../../../core/ui/text/96/Text96M';

const ArticleHeaderText = ({title, description, className, ...props}) => {
    return (
        <div className={`${className} ${cl.text}`} {...props}>
            <Text96M>{title}</Text96M>
            <p className={cl.description} dangerouslySetInnerHTML={{__html: description}} />
        </div>
    );
};

export default ArticleHeaderText;