import React, {useEffect, useState} from 'react';
import cl from './_DetailedTOC.module.scss'
import Text20B from "../../../../../../../../core/ui/text/20/Text20B";
import DetailedTOCList from "./core/components/menu/list/DetailedTOCList";
import arrowSVG from '../../../../../../../../core/static/img/arrow-down-white-fill.svg';
import {useSelector} from "react-redux";

const DetailedTOC = ({title, list, path, className, ...props}) => {
    const toc = useSelector((state) => state.toc);
    const [active, setActive] = useState(false);

    const handleOnClick = () => {
        setActive(!active);
    };

    useEffect(() => {
        setActive(toc.activeParent === path);
    }, [toc.activeParent, path]);

    return (
        <div className={`${className} ${cl.toc} ${active ? cl.active : ''}`} {...props}>
            <button className={cl.header}  onClick={handleOnClick}>
                <Text20B className={cl.title}>{title}</Text20B>
                <img src={arrowSVG} alt="<" className={cl.arrow}/>
            </button>
            {active &&
                <div className={`${cl.content}`}>
                    <div className={cl.line} />
                    <DetailedTOCList path={path} list={list} />
                </div>
            }
        </div>
    );
};

export default DetailedTOC;