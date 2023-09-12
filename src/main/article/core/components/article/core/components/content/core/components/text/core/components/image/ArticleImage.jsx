import React from 'react';
import cl from './_ArticleImage.module.scss';
import { getImage } from '../../../../../../../../../../../../../../core/service/image';

const ArticleImage = ({image, className, ...props}) => {
    return (
        <img src={getImage(image)} alt='Preview' className={`${className} ${cl.image}`} {...props} />
    );
};

export default ArticleImage;