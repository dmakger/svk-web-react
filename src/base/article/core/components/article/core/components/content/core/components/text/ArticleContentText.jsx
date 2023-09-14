import React, {useEffect, useState} from 'react';
import cl from './_ArticleContentText.module.scss';
import clLink from '../../../../../../../../../../core/scss/_link.module.scss';
import clH2 from '../../../../../../../../../../core/scss/_h2.module.scss';
import ArticleImage from './core/components/image/ArticleImage';
import {getImage} from "../../../../../../../../../../../core/service/image";

const ArticleContentText = ({image, content, className, ...props}) => {
    const [contentWithPrefix, setContentWithPrefix] = useState("");

    useEffect(() => {
        // Создаем элемент div для вставки HTML-контента и обработки его
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = content;

        // Находим все изображения в контенте
        const images = tempDiv.querySelectorAll("img");

        // Добавляем префикс к src каждого изображения
        images.forEach((image) => {
            const src = image.getAttribute("src");
            if (src && !src.startsWith("http")) {
                image.setAttribute("src", getImage(src));
            }
        });

        // Получаем обновленный HTML-контент с префиксами
        const updatedContent = tempDiv.innerHTML;
        setContentWithPrefix(updatedContent);
    }, [content]);

    return (
        <div {...props}>
            <ArticleImage image={image} />
            <p className={`${cl.content} ${clLink.content} ${clH2.content}`} dangerouslySetInnerHTML={{__html: contentWithPrefix}} />
        </div>
    );
};

export default ArticleContentText;