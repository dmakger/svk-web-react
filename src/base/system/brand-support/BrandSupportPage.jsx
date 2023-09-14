import React, {useEffect, useState} from 'react';
import ArticleSystem from "../../article/system/ArticleSystem";
import {useDispatch, useSelector} from "react-redux";
import {selectSystemPageData} from "../../../core/reducer/systemPageReducer";
import {setToc} from "../../../core/reducer/tocReducer";
import {__BRAND_SUPPORT_URL, _ABOUT_BRAND_URL} from "../../../core/service/urls";
import {fetchSystemPage} from "../../../core/reducer/actions";
import Loading from "../../../core/ui/loading/Loading";
import BrandSupport from "./core/components/brand-support/BrandSupport";

const BrandSupportPage = () => {
    const [article, setArticle] = useState(null);
    const systemPageData = useSelector(selectSystemPageData);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSystemPage(__BRAND_SUPPORT_URL))
        dispatch(setToc({
            parent: _ABOUT_BRAND_URL,
            child: __BRAND_SUPPORT_URL,
        }))
    }, [dispatch]);

    useEffect(() => {
        if (systemPageData) {
            setArticle(systemPageData);
        }
    }, [systemPageData]);

    return (
        <>
            {article
                ? (
                    <ArticleSystem title={article.title} description={article.description}>
                        <BrandSupport />
                    </ArticleSystem>
                )
                : <Loading />
            }
        </>
    );
};

export default BrandSupportPage;