import React, {useEffect, useState} from 'react';
import cl from './_ArticleContentText.module.scss';
import clLink from '../../../../../../../../../../core/scss/_link.module.scss';
import clH2 from '../../../../../../../../../../core/scss/_h2.module.scss';
import ArticleImage from './core/components/image/ArticleImage';
import {getImage} from "../../../../../../../../../../../core/service/image";

const ArticleContentText = ({image, content, className, setActiveHeadingIndex, ...props}) => {
    const [contentWithPrefix, setContentWithPrefix] = useState("");
    const [headingOffsets, setHeadingOffsets] = useState([]);

    useEffect(() => {
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = content;

        const images = tempDiv.querySelectorAll("img");

        images.forEach((image) => {
            const src = image.getAttribute("src");
            if (src && !src.startsWith("http")) {
                image.setAttribute("src", getImage(src));
            }
        });

        const updatedContent = tempDiv.innerHTML;
        setContentWithPrefix(updatedContent);
    }, [content]);

    useEffect(() => {
        // Функция для получения смещений заголовков h2
        function getHeadingOffsets() {
            const headings = document.querySelectorAll("h2");
            const newHeadingOffsets = [];
            headings.forEach((heading) => {
                const top = heading.offsetTop;
                newHeadingOffsets.push(top);
            });
            setHeadingOffsets(newHeadingOffsets);
        }

        // Дождитесь завершения рендеринга и получите смещения заголовков
        setTimeout(getHeadingOffsets, 1000);
    }, [content]);

    useEffect(() => {
        function handleScroll() {
            const scrollY = window.scrollY + 300;
            let newActiveHeadingIndex = 0;
            for (const index in headingOffsets) {
                if (scrollY >= headingOffsets[index])
                    newActiveHeadingIndex = Number(index)
            }
            if (newActiveHeadingIndex !== -1) {
                setActiveHeadingIndex(newActiveHeadingIndex);
            }
        }

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [headingOffsets, setActiveHeadingIndex]);
    return (
        <div className={className} {...props}>
            <ArticleImage image={image} className={cl.image}/>
            <p className={`${cl.content} ${clLink.content} ${clH2.content}`}
               dangerouslySetInnerHTML={{__html: contentWithPrefix}}/>
        </div>
    );
};

export default ArticleContentText;
