import React, {useEffect, useState} from 'react';
// import cl from './_ArticleBrandPage.module.scss'
import Article from '../core/components/article/Article';
import {getBrandArticle} from '../../core/api/coreAPI';
import {useParams} from 'react-router-dom';
import Loading from '../../../core/ui/loading/Loading';

const ArticleBrandPage = () => {
    const {path} = useParams();
    const [article, setArticle] = useState(null);

    useEffect(() => {
        getBrandArticle(path)
            .then(response => {
                setArticle(response)
            })
    }, [path])


    return (
        <>
            {article
                ? <Article title={article.title}
                           linkVideo={article.video}
                           description={article.description}
                           writer={article.writer}
                           brand={article.brand}
                           tags={article.tags}
                           image={article.preview_image}
                           dateAt={article.date_at}
                           content={article.content}/>
                : <Loading/>
            }

        </>
    );
};

export default ArticleBrandPage;