import React from 'react';
import cl from './_BrandSupportItem.module.scss';
import Text36M from "../../../../../../../../../core/ui/text/36/Text36M";

const BrandSupportItem = ({title, description, link, image, className, ...props}) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer"
           className={`${cl.brand} ${className}`} {...props}
        >
            <img className={cl.image} src={image} alt={title}/>
            <div className={cl.text}>
                <Text36M className={cl.title}>{title}</Text36M>
                <p className={cl.description} dangerouslySetInnerHTML={{__html: description}} />
            </div>
        </a>
    );
};

export default BrandSupportItem;