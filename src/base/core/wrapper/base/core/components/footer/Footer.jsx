import React from 'react';
import cl from './_Footer.module.scss'
import LogoR from '../../../../../../../core/ui/logo/r/LogoR';
import FooterNavList from './core/components/nav/list/FooterNavList';

const Footer = () => {
	return (
		<footer className={cl.footer}>
			<LogoR />
			<FooterNavList className={cl.list} />
		</footer>
	);
};

export default Footer;