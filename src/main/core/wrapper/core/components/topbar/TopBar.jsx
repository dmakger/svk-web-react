import React from 'react';
import cl from './_TopBar.module.scss'
import LogoH from '../../../../../../core/ui/logo/h/LogoH';

const TopBar = () => {
	return (
		<header className={cl.header}>
			<div className={cl.content}>
				<LogoH />
			</div>
		</header>
	);
};

export default TopBar;