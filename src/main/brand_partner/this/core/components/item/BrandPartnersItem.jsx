import React from 'react';
import cl from './_BrandPartnersItem.module.scss'
import { GLOBAL_URL } from '../../../../../../core/api/mainAPI';
import Text24B from '../../../../../../core/ui/text/24/Text24B'
import { Link } from 'react-router-dom';

const BrandPartnersItem = ({title, path, image, className, ...props}) => {
    return (
        <Link to={`./${path}`} className={`${cl.block} ${className}`}>
            <div className={cl.imageWrapper}>
                <img alt={'Логотип бренда'} src={`${GLOBAL_URL}/${image}`} className={cl.image} />
            </div>
            <Text24B className={cl.title}>{title}</Text24B>
        </Link>
    );
};

export default BrandPartnersItem;