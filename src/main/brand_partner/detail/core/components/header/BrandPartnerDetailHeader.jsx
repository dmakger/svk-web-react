import React, { useEffect, useState } from 'react';
import { getBrandPartnersHeader } from '../../../../../core/api/coreAPI';
import cl from './_BrandPartnerDetailHeader.module.scss'
import { GLOBAL_URL } from '../../../../../../core/api/mainAPI';
import Text64M from '../../../../../../core/ui/text/64/Text64M';
import BaseLink from '../../../../../../core/ui/link/base/BaseLink';
import Loading from '../../../../../../core/ui/loading/Loading';

const BrandPartnerDetailHeader = ({className, path, ...props}) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        getBrandPartnersHeader(path)
        .then(response => {
            setData(response)
        })
    }, [path])


    return (
        <div className={`${className} ${cl.header}`} { ...props}>
            {data === null 
                ? <Loading />
                : (<>
                    <img alt={`Логотип компании`} src={`${GLOBAL_URL}/${data.logo_image}`} className={cl.image} />
                    <div className={cl.text}>
                        <Text64M>{data.title}</Text64M>
                        <p className={cl.description} dangerouslySetInnerHTML={{__html: data.description}} />
                        <BaseLink className={cl.link} to={data.link} usNewPage={true}>Страница компании</BaseLink>
                    </div>
                </>)
            }
        </div>
    );
};

export default BrandPartnerDetailHeader;