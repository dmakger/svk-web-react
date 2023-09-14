import React from 'react';
import cl from './_BrandSupportList.module.scss'
import BrandSupportItem from "../item/BrandSupportItem";
import {GLOBAL_URL} from "../../../../../../../../../core/api/mainAPI";

const BrandSupportList = ({list, className, ...props}) => {
    return (
        <div className={`${className} ${cl.list}`} {...props}>
            {list.map(it => (
                <BrandSupportItem key={it.path}
                                  title={it.title}
                                  description={it.description}
                                  link={it.link}
                                  image={`${GLOBAL_URL}${it.logo_image}`} />
            ))}
        </div>
    );
};

export default BrandSupportList;