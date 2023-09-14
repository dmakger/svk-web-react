import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Routes} from 'react-router-dom'

import cl from './_BaseWrapper.module.scss'
import TopBar from './core/components/topbar/TopBar';
import Footer from './core/components/footer/Footer';
import {fetchTOC} from '../../../../core/reducer/actions';
import ApplicationLink from './core/components/application/ApplicationLink';

const BaseWrapper = ({children}) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchTOC())
    }, [dispatch]);

    return (
        <>
            <TopBar/>
            <main className={cl.wrapper}>
                <Routes>{children}</Routes>
            </main>
            <ApplicationLink className={cl.application}/>
            <Footer/>
        </>
    );
};

export default BaseWrapper;