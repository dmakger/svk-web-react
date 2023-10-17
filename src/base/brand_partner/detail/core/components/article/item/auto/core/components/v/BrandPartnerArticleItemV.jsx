import React, {useState} from 'react';
import cl from './_BrandPartnerArticleItemV.module.scss'
import BrandPartnerArticleItem from '../../../../core/components/item/BrandPartnerArticleItem';
import { ARTICLE_URL } from '../../../../../../../../../../../core/service/urls';
import { getDate } from '../../../../../../../../../../../core/service/date';
import Text20M from '../../../../../../../../../../../core/ui/text/20/Text20M';
import Text24M from '../../../../../../../../../../../core/ui/text/24/Text24M';
import ArticleTagList from '../core/components/tag/list/ArticleTagList';
import { getImage } from '../../../../../../../../../../../core/service/image';
import Size from "../../../../../../../../../../../core/service/Size";
import ArticleTagItem from "../core/components/tag/item/ArticleTagItem";


const BrandPartnerArticleItemV = ({path, title, description, image, dateAt, tags, className, ...props}) => {
    const [is480, setIs480] = useState(false);
    return (
        <BrandPartnerArticleItem to={`/${ARTICLE_URL}/${path}`} className={`${cl.block} ${className}`} {...props}>
            <img alt={`${path}`} src={getImage(image)} className={cl.image} />
            <div className={cl.content}>
                {!is480 && <ArticleTagList list={tags}/>}
                {tags.length !== 0 && is480 &&
                    <ArticleTagItem title={tags[0].title} className={cl.tag} />}
                <div className={cl.text}>
                    <Text24M>{title}</Text24M>
                    <p className={cl.description} dangerouslySetInnerHTML={{__html: description}} />
                </div>
                <Text20M className={cl.date}>{getDate(dateAt)}</Text20M>
            </div>
            <Size width={480} set={setIs480}/>
        </BrandPartnerArticleItem>
    );
};

export default BrandPartnerArticleItemV;