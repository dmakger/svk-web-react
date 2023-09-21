import React from 'react';
import cl from './_Footer.module.scss'
import LogoR from '../../../../../../../core/ui/logo/r/LogoR';
import FooterNavList from './core/components/nav/list/FooterNavList';
import FooterSocial from "./core/components/social/FooterSocial";

const Footer = () => {
	return (
		<footer className={cl.footer}>
			<LogoR />
			<FooterNavList className={cl.list} />
			<FooterSocial className={cl.social} />
		</footer>
	);
};

export default Footer;