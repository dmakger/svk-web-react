import React, { useEffect, useState } from 'react';
import cl from './_BrandPartnersList.module.scss'

import BrandPartnersItem from '../item/BrandPartnersItem';
import { getBrandPartners } from '../../../../../core/api/coreAPI';

const BrandPartnersList = ({className, ...props}) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        getBrandPartners()
        .then(response => {
            // console.log(response)
            setData(response.results)
        })
    }, [])


    return (
        <div className={`${className} ${cl.list}`} {...props}>
            {data.map(it => (
                <BrandPartnersItem key={it.path} 
                    path={it.path} 
                    title={it.title}
                    image={it.logo_image}/>
            ))}
        </div>
    );
};

export default BrandPartnersList;