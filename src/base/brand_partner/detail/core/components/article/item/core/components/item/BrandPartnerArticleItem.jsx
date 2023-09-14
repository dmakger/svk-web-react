import React from 'react';
import cl from './_BrandPartnerArticleItem.module.scss'
import { Link } from 'react-router-dom';

const BrandPartnerArticleItem = ({to, className, ...props}) => {
    return (
        <Link to={to} className={`${className} ${cl.block}`} {...props} />
    );
};

export default BrandPartnerArticleItem;