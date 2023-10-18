import React, {useEffect, useState} from 'react';
import cl from './_SystemWrapper.module.scss'
import {getTOC} from "../api/systemAPI";
import {getFormatSystemList} from "./core/service/systemList";
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {fetchSystemPage} from "../../../../core/reducer/actions";
import TocAuto from "./core/components/toc/auto/TocAuto";

const SystemWrapper = ({children}) => {
    const { path2 } = useParams(); // Извлекаем несколько параметров из URL
    const [toc, setToc] = useState([]);

    useEffect(() => {
        getTOC()
            .then(response => {
                setToc(getFormatSystemList(response))
            })
    }, [])

    const dispatch = useDispatch();
    useEffect(() => {
        if (path2) {
            dispatch(fetchSystemPage(path2))
        }
    }, [dispatch, path2]);

    return (
        <div className={cl.wrapper}>
            <TocAuto toc={toc} className={cl.toc} />
            {children}
        </div>
    );
};

export default SystemWrapper;