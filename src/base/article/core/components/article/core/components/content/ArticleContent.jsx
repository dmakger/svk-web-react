import React, { useEffect, useState } from 'react';
import cl from './_ArticleContent.module.scss';
import ArticleContentToc from './core/components/toc/ArticleContentToc';
import ArticleContentText from './core/components/text/ArticleContentText';

const ArticleContent = ({image, content, className, ...props}) => {
    const [activeHeading, setActiveHeading] = useState(null);

    useEffect(() => {
        function handleScroll() {
            const headings = document.querySelectorAll("h2");

            headings.forEach((heading) => {
                const rect = heading.getBoundingClientRect();

                if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                    const headingText = heading.textContent.trim();

                    const tableOfContentsLinks = document.querySelectorAll(`.${cl.tocItem}`);
                    tableOfContentsLinks.forEach((link) => {
                        if (link.textContent.trim() === headingText) {
                            setActiveHeading(headingText);
                        }
                    });
                }
            });
          }
    
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

    return (
        <div className={`${className} ${cl.content}`} {...props}>
            <ArticleContentText image={image}
                                content={content} />
            <ArticleContentToc content={content} 
                            activeHeading={activeHeading}
                            className={cl.toc} 
                            classNameItem={cl.tocItem} />
        </div>
    );
};

export default ArticleContent;