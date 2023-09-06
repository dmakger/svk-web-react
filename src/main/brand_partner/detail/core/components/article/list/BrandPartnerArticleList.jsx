import React, { useEffect, useState } from 'react';
import { getBrandPartnersArticleList } from '../../../../../../core/api/coreAPI';
import cl from './_BrandPartnerArticleList.module.scss'
import BrandPartnerArticleItemAuto from '../item/auto/BrandPartnerArticleItemAuto';
import BrandPartnerArticleItemH from '../item/h/BrandPartnerArticleItemH';
import { getData, getIndexMain } from './core/service/architecture';

const BrandPartnerArticleList = ({path, className, ...props}) => {
    const [main, setMain] = useState(null);
    const [data, setData] = useState([]);
    useEffect(() => {
        if (path === null || path === undefined)
            return 
        getBrandPartnersArticleList(path, [
            ['order_by', '-date_at'],
            ['order_by', '-time_at'],
        ])
        .then(response => {
            const index = getIndexMain(response.results);
            if (index !== -1) {
                setMain(response.results.splice(index, 1)[0])
                setData(getData(response.results))
            }
        })
    }, [path])


    return (
        <div className={`${className} ${cl.block}`} {...props}>
            {main !== null
            ? <BrandPartnerArticleItemH path={main.path}
                                        title={main.title}
                                        description={main.description}
                                        image={main.preview_image}
                                        tags={main.tags}
                                        dateAt={main.date_at}/>
            : null
            }
            <div className={cl.list}>
                {data.map(it => (
                    <BrandPartnerArticleItemAuto key={it.path} 
                                                path={it.path}
                                                title={it.title}
                                                description={it.description}
                                                image={it.preview_image}
                                                tags={it.tags}
                                                dateAt={it.date_at} />
                ))}
            </div>
        </div>
    );
};





export default BrandPartnerArticleList; 