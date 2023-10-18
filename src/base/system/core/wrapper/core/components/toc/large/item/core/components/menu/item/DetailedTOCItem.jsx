import React from 'react';
import cl from './_DetailedTOCItem.module.scss'
import {Link} from "react-router-dom";
import Text20M from "../../../../../../../../../../../../../core/ui/text/20/Text20M";
import {useSelector} from "react-redux";

const DetailedTOCItem = ({to, path, title, className, ...props}) => {
    const toc = useSelector((state) => state.toc);
    return (
    <Link to={to} className={`${className} `} {...props}>
        <Text20M className={`${cl.item} ${toc.activeChild === path ? cl.active : ''}`}>{title}</Text20M>
    </Link>
    );
};

export default DetailedTOCItem;