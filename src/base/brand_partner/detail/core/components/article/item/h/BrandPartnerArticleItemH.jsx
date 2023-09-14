import React from 'react';
import cl from './_BrandPartnerArticleItemH.module.scss'

import { getImage } from '../../../../../../../../core/service/image';
import BrandPartnerArticleItem from '../core/components/item/BrandPartnerArticleItem';
import ArticleHTagList from './core/components/tag/list/ArticleHTagList';
import Text36M from '../../../../../../../../core/ui/text/36/Text36M';
import { getDate } from '../../../../../../../../core/service/date';
import Text20M from '../../../../../../../../core/ui/text/20/Text20M';
import { ARTICLE_URL } from '../../../../../../../../core/service/urls';

const BrandPartnerArticleItemH = ({path, title, description, image, dateAt, tags, className, ...props}) => {
    return (
        <BrandPartnerArticleItem to={`/${ARTICLE_URL}/${path}`} className={`${cl.block} ${className}`} {...props}>
            <img alt={`${path}`} src={getImage(image)} className={cl.image} />
            <div className={cl.content}>
                <ArticleHTagList list={tags} className={cl.tags} />
                <div className={cl.text}>
                    <Text36M>{title}</Text36M>
                    <p className={cl.description} dangerouslySetInnerHTML={{__html: description}} />
                </div>
                <Text20M className={cl.date}>{getDate(dateAt)}</Text20M>
            </div>
        </BrandPartnerArticleItem>
    );
};

export default BrandPartnerArticleItemH;