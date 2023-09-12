import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes } from 'react-router-dom'

import cl from './_MainWrapper.module.scss'
import TopBar from './core/components/topbar/TopBar';
import Footer from './core/components/footer/Footer';
import { fetchTOC } from './core/actions/toc';
import ApplicationLink from './core/components/application/ApplicationLink';


const MainWrapper = ({ children }) => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchTOC())
	}, [dispatch]);

	return (
		<>
			<TopBar />
			<main className={cl.main}>
				<Routes>
					{children}
				</Routes>
			</main>
			<ApplicationLink className={cl.application} />
			<Footer />
		</>
	);
};

export default MainWrapper;