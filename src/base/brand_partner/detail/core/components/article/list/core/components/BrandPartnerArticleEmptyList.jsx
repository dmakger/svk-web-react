import React from 'react';
import Text32B from '../../../../../../../../../core/ui/text/32/Text32M';
import cl from './_BrandPartnerArticleEmptyList.module.scss';

const BrandPartnerArticleEmptyList = () => {
    return (
        <div className={cl.block}>
            <Text32B>Бренд пока не написал ни одной статьи</Text32B>
        </div>
    );
};

export default BrandPartnerArticleEmptyList;