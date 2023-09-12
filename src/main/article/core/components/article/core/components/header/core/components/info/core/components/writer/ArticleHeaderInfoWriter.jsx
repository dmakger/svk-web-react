import React from 'react';
import cl from './_ArticleHeaderInfoWriter.module.scss';

import ArticleHeaderInfoItem from '../core/components/item/ArticleHeaderInfoItem';
import Text20M from '../../../../../../../../../../../../../../core/ui/text/20/Text20M';
import { getImage } from '../../../../../../../../../../../../../../core/service/image';

const ArticleHeaderInfoWriter = ({writer, className, ...props}) => {
    return (
        <ArticleHeaderInfoItem title={'Писатель'} className={className} {...props}>
            <div className={cl.content}>
                <img className={cl.image} src={getImage(writer.avatar_image)} alt='Писатель' />
                <Text20M>{writer.lastname} {writer.firstname} {writer.pastname}</Text20M>
            </div>
        </ArticleHeaderInfoItem>
    );
};

export default ArticleHeaderInfoWriter;