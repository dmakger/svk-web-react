import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes } from 'react-router-dom'

import TopBar from './core/components/topbar/TopBar';
import Footer from './core/components/footer/Footer';
import { fetchTOC } from './core/actions/toc';


const MainWrapper = ({ children }) => {
	const dispatch = useDispatch();
	useEffect(() => {
		// Вызываем запрос к API при монтировании компонента
		dispatch(fetchTOC())
	}, [dispatch]);

	return (
		<>
			<TopBar />
			<main>
				<Routes>
					{children}
				</Routes>
			</main>
			<Footer />
		</>
	);
};

export default MainWrapper;