import React from 'react';
import BrandPartnerArticleItemV from './core/components/v/BrandPartnerArticleItemV';
import BrandPartnerArticleItemWI from './core/components/without_image/BrandPartnerArticleItemWI';

const BrandPartnerArticleItemAuto = ({path, title, description, image, dateAt, tags, className, ...props}) => {
    if (image === null)
        return (
            <BrandPartnerArticleItemWI path={path} 
                                    title={title}
                                    dateAt={dateAt}
                                    tags={tags}
                                    className={className}
                                    {...props}/>
        )

    return (
        <BrandPartnerArticleItemV path={path} 
                                    title={title}
                                    image={image}
                                    description={description}
                                    dateAt={dateAt}
                                    tags={tags}
                                    className={className}
                                    {...props}/>
    );
};

export default BrandPartnerArticleItemAuto;