import React, {useState} from 'react';
import cl from './_BrandPartnerArticleItemH.module.scss'

import { getImage } from '../../../../../../../../core/service/image';
import BrandPartnerArticleItem from '../core/components/item/BrandPartnerArticleItem';
import ArticleHTagList from './core/components/tag/list/ArticleHTagList';
import Text36M from '../../../../../../../../core/ui/text/36/Text36M';
import { getDate } from '../../../../../../../../core/service/date';
import Text20M from '../../../../../../../../core/ui/text/20/Text20M';
import { ARTICLE_URL } from '../../../../../../../../core/service/urls';
import Size from "../../../../../../../../core/service/Size";
import ArticleHTagItem from "./core/components/tag/item/ArticleHTagItem";

const BrandPartnerArticleItemH = ({path, title, description, image, dateAt, tags, className, ...props}) => {
    const [is480, setIs480] = useState(false)
    return (
        <BrandPartnerArticleItem to={`/${ARTICLE_URL}/${path}`} className={`${cl.block} ${className}`} {...props}>
            <img alt={`${path}`} src={getImage(image)} className={cl.image} />
            <div className={cl.content}>
                {!is480 && <ArticleHTagList list={tags}/>}
                {tags.length !== 0 && is480 &&
                    <ArticleHTagItem title={tags[0].title} className={cl.tag} />}
                <div className={cl.text}>
                    <Text36M className={cl.title}>{title}</Text36M>
                    <p className={cl.description} dangerouslySetInnerHTML={{__html: description}} />
                </div>
                <Text20M className={cl.date}>{getDate(dateAt)}</Text20M>
            </div>
            <Size width={480} set={setIs480}/>
        </BrandPartnerArticleItem>
    );
};

export default BrandPartnerArticleItemH;