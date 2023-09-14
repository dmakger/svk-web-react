import React from 'react';
import { useParams } from 'react-router-dom';
import cl from './_BrandPartnerDetailPage.module.scss'
import BrandPartnerDetailHeader from './core/components/header/BrandPartnerDetailHeader';
import BrandPartnerDetailArticleList from './core/components/article/list/BrandPartnerArticleList'

const BrandPartnerDetailPage = () => {
    const { path } = useParams();

    return (
        <div className={cl.page}>
            <BrandPartnerDetailHeader path={path} className={cl.header}/>
            <BrandPartnerDetailArticleList className={cl.list} path={path} />
        </div>
    );
};

export default BrandPartnerDetailPage;