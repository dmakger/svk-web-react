import React from 'react';
import cl from './_BrandPartnerArticleItemWI.module.scss'
import BrandPartnerArticleItem from '../../../../core/components/item/BrandPartnerArticleItem';
import { ARTICLE_URL } from '../../../../../../../../../../../core/service/urls';
import { getDate } from '../../../../../../../../../../../core/service/date';
import Text20M from '../../../../../../../../../../../core/ui/text/20/Text20M';
import Text15M from '../../../../../../../../../../../core/ui/text/15/Text15M';
import ArticleTagList from '../core/components/tag/list/ArticleTagList';

const BrandPartnerArticleItemWI = ({path, title, dateAt, tags, className, ...props}) => {
    return (
        <BrandPartnerArticleItem to={`/${ARTICLE_URL}/${path}`} className={`${cl.block} ${className}`} {...props}>
            <div className={cl.top}>
                <ArticleTagList list={tags} className={cl.tags} />
                <Text15M className={cl.date}>{getDate(dateAt)}</Text15M>
            </div>
            <Text20M className={cl.title}>{title}</Text20M>
        </BrandPartnerArticleItem>
    );
};

export default BrandPartnerArticleItemWI;