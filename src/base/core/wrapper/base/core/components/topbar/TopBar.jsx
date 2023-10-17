import React from 'react';

import cl from './_TopBar.module.scss'
import TopBarMenu from './core/components/menu/TopBarMenu';
import LogoAuto from "../../../../../../../core/ui/logo/auto/LogoAuto";


const TopBar = () => {
	return (
		<header className={cl.header}>
			<div className={cl.wrapper}>
				<div className={cl.content}>
					<LogoAuto classNameR={cl.logo}/>
					<TopBarMenu />
				</div>
			</div>
		</header>
	);
};

export default TopBar;