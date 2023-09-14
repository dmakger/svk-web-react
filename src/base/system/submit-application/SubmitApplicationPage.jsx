import React, {useEffect, useState} from 'react';
import ArticleSystem from "../../article/system/ArticleSystem";
import {useDispatch, useSelector} from "react-redux";
import {selectSystemPageData} from "../../../core/reducer/systemPageReducer";
import {setToc} from "../../../core/reducer/tocReducer";
import {_FOR_BUSINESS_URL, __STATEMENT_APPLICATION_URL} from "../../../core/service/urls";
import {fetchSystemPage} from "../../../core/reducer/actions";
import Loading from "../../../core/ui/loading/Loading";
import SubmitApplication from './core/components/SubmitApplication';

const SubmitApplicationPage = () => {
    const [article, setArticle] = useState(null);
    const systemPageData = useSelector(selectSystemPageData);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSystemPage(__STATEMENT_APPLICATION_URL))
        dispatch(setToc({
            parent: _FOR_BUSINESS_URL,
            child: __STATEMENT_APPLICATION_URL,
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
                    <ArticleSystem title={article.title} 
                                    description={article.description} >
                        <SubmitApplication />
                    </ArticleSystem>
                )
                : <Loading />
            }
        </>
    );
};

export default SubmitApplicationPage;