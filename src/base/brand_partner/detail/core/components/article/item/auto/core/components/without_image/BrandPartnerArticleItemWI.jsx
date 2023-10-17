import React, {useState} from 'react';
import cl from './_BrandPartnerArticleItemWI.module.scss'
import BrandPartnerArticleItem from '../../../../core/components/item/BrandPartnerArticleItem';
import { ARTICLE_URL } from '../../../../../../../../../../../core/service/urls';
import { getDate } from '../../../../../../../../../../../core/service/date';
import Text15M from '../../../../../../../../../../../core/ui/text/15/Text15M';
import ArticleTagList from '../core/components/tag/list/ArticleTagList';
import Size from "../../../../../../../../../../../core/service/Size";
import {cls} from "../../../../../../../../../../../core/service/cls";
import Text24M from "../../../../../../../../../../../core/ui/text/24/Text24M";
import ArticleTagItem from "../core/components/tag/item/ArticleTagItem";

const BrandPartnerArticleItemWI = ({path, title, dateAt, tags, className, ...props}) => {
    const [is768, setIs768] = useState(false)
    const [is480, setIs480] = useState(false)

    return (
        <BrandPartnerArticleItem to={`/${ARTICLE_URL}/${path}`} className={`${cl.block} ${className}`} {...props}>
            <div className={cl.top}>
                {!is480 && <ArticleTagList list={tags}/>}
                {tags.length !== 0 && is480 &&
                    <ArticleTagItem title={tags[0].title} className={cl.tag} />}
                {!is768 && <Text15M className={cl.date}>{getDate(dateAt)}</Text15M>}
            </div>
            <Text24M className={cl.title}>{title}</Text24M>
            {is768 && <Text15M className={cls(cl.date, cl.bottomDate)}>{getDate(dateAt)}</Text15M>}
            <Size width={768} set={setIs768} />
            <Size width={480} set={setIs480} />
        </BrandPartnerArticleItem>
    );
};

export default BrandPartnerArticleItemWI;