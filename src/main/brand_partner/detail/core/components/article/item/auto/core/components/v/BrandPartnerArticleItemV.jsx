import React from 'react';
import cl from './_BrandPartnerArticleItemV.module.scss'
import BrandPartnerArticleItem from '../../../../core/components/item/BrandPartnerArticleItem';
import { ARTICLE_URL } from '../../../../../../../../../../../core/service/urls';
import { getDate } from '../../../../../../../../../../../core/service/date';
import Text20M from '../../../../../../../../../../../core/ui/text/20/Text20M';
import ArticleTagList from '../core/components/tag/list/ArticleTagList';
import { getImage } from '../../../../../../../../../../../core/service/image';


const BrandPartnerArticleItemV = ({path, title, description, image, dateAt, tags, className, ...props}) => {
    return (
        <BrandPartnerArticleItem to={`/${ARTICLE_URL}/${path}`} className={`${cl.block} ${className}`} {...props}>
            <img alt={`${path}`} src={getImage(image)} className={cl.image} />
            <div className={cl.content}>
                <ArticleTagList list={tags} className={cl.tags} />
                <div className={cl.text}>
                    <Text20M>{title}</Text20M>
                    <p className={cl.description} dangerouslySetInnerHTML={{__html: description}} />
                </div>
                <Text20M className={cl.date}>{getDate(dateAt)}</Text20M>
            </div>
        </BrandPartnerArticleItem>
    );
};

export default BrandPartnerArticleItemV;