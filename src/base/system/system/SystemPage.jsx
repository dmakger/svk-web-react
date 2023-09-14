import React, {useEffect, useState} from 'react';
import Article from "../../article/core/components/article/Article";
import Loading from "../../../core/ui/loading/Loading";
import {useDispatch, useSelector} from "react-redux";
import {setToc} from "../../../core/reducer/tocReducer";
import {useParams} from "react-router-dom";
import {selectSystemPageData} from "../../../core/reducer/systemPageReducer";

const SystemPage = () => {
    const [article, setArticle] = useState(null);
    const systemPageData = useSelector(selectSystemPageData);
    const { path1, path2 } = useParams(); // Извлекаем несколько параметров из URL
    const dispatch = useDispatch();

    useEffect(() => {
        if (systemPageData) {
            setArticle(systemPageData);
        }
        dispatch(setToc({
            parent: path1,
            child: path2,
        }))
    }, [dispatch, path1, path2, systemPageData]);

    return (
        <>
            {article
                ? <Article title={article.title}
                           description={article.description}
                           image={article.preview_image}
                           content={article.content} />
                : <Loading />
            }

        </>
    );
};

export default SystemPage;