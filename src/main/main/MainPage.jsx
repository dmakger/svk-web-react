import React from 'react';
import cl from './_MainPage.module.scss'
import {APPLICATION_URL} from '../../core/service/urls'

import LogoR from '../../core/ui/logo/r/LogoR'
import Text64B from '../../core/ui/text/64/Text64B';
import Text32M from '../../core/ui/text/32/Text32M';
import MainBackground from './core/components/background/MainBackground';
import LinkBlue from '../../core/ui/link/blue/LinkBlue';

const MainPage = () => {
	return (
		<>
			<div className={cl.content}>
				<LogoR className={cl.logo} />
				<div className={cl.right}>
					<Text64B className={cl.title}>СДЕЛАНО В КОРОЛËВЕ</Text64B>
					<Text32M className={cl.description}>Онлайн-платформа продвижения локальных предпринимателей Подмосковья</Text32M>
					<LinkBlue className={cl.button} to={APPLICATION_URL} title='Стать частью команды' />
				</div>
			</div>

			<MainBackground />
		</>
	);
};

export default MainPage;