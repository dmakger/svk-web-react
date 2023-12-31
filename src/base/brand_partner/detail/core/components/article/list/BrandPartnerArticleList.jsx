import React, {useEffect, useState} from 'react';
import {getBrandPartnersArticleList} from '../../../../../../core/api/coreAPI';
import cl from './_BrandPartnerArticleList.module.scss'
import BrandPartnerArticleItemAuto from '../item/auto/BrandPartnerArticleItemAuto';
import BrandPartnerArticleItemH from '../item/h/BrandPartnerArticleItemH';
import {getData, getIndexMain} from './core/service/architecture';
import Loading from '../../../../../../../core/ui/loading/Loading';
import BrandPartnerArticleEmptyList from './core/components/BrandPartnerArticleEmptyList';
import Size from "../../../../../../../core/service/Size";

const BrandPartnerArticleList = ({path, className, ...props}) => {
    const [main, setMain] = useState(null);
    const [data, setData] = useState([]);
    const [isMainLoading, setIsMainLoading] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [is1480, setIs1480] = useState(false)

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
                }
                if (response.results.length > 0) {
                    setData(getData(response.results, getAmountInLine(is1480)))
                }
                setIsMainLoading(true)
                setIsLoading(true)
            })
    }, [is1480, path])


    if (isLoading && data.length === 0) {
        return (
            <BrandPartnerArticleEmptyList/>
        )
    }
    return (
        <div className={`${className} ${cl.block}`} {...props}>
            {main !== null
                ? <BrandPartnerArticleItemH path={main.path}
                                            title={main.title}
                                            description={main.description}
                                            image={main.preview_image}
                                            tags={main.tags}
                                            dateAt={main.date_at}/>
                : !isMainLoading &&
                    <Loading/>
            }
            <div className={cl.list}>
                {data.map(it => (
                    <BrandPartnerArticleItemAuto key={it.path}
                                                 path={it.path}
                                                 title={it.title}
                                                 description={it.description}
                                                 image={it.preview_image}
                                                 tags={it.tags}
                                                 dateAt={it.date_at}
                                                 className={cl.item}/>
                ))}
            </div>
            <Size set={setIs1480} width={1480}/>
        </div>
    );
};


const getAmountInLine = (is1480) => {
    if (is1480)
        return 2
    return 3
}


export default BrandPartnerArticleList;