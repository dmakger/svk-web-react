import React from 'react';
import cl from './_ArticleHeaderInfoBrand.module.scss';

import ArticleHeaderInfoItem from '../core/components/item/ArticleHeaderInfoItem';
import Text20M from '../../../../../../../../../../../../../../core/ui/text/20/Text20M';
import { getImage } from '../../../../../../../../../../../../../../core/service/image';


const ArticleHeaderInfoBrand = ({brand, className, ...props}) => {
    return (
        <div className={`${className} ${cl.info}`} {...props}>
            <ArticleHeaderInfoItem title={'Бренд'} className={className} {...props}>
            <div className={cl.content}>
                <img className={cl.image} src={getImage(brand.logo_image)} alt='brand' />
                <Text20M>{brand.title}</Text20M>
            </div>
        </ArticleHeaderInfoItem>
        </div>
    );
};

export default ArticleHeaderInfoBrand;