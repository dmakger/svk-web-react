import React from 'react';

import cl from './_TopBar.module.scss'
import LogoH from '../../../../../../../core/ui/logo/h/LogoH';
import TopBarMenu from './core/components/menu/TopBarMenu';


const TopBar = () => {
	return (
		<header className={cl.header}>
			<div className={cl.wrapper}>
				<div className={cl.content}>
					<LogoH />
					<TopBarMenu />
				</div>
			</div>
		</header>
	);
};

export default TopBar;