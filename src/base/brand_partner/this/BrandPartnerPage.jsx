import React from 'react';
import cl from './_BrandPartnerPage.module.scss'

import Text64M from '../../../core/ui/text/64/Text64M'
import BrandPartnersList from './core/components/list/BrandPartnersList';

const BrandPartnerPage = () => {
    return (
        <div className={cl.block}>
            <Text64M className={cl.title}>Партнёры бренда</Text64M>
            <BrandPartnersList className={cl.list} />
        </div>
    );
};

export default BrandPartnerPage;