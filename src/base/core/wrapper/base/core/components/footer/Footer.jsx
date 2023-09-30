import React from 'react';
import cl from './_Footer.module.scss'
import LogoR from '../../../../../../../core/ui/logo/r/LogoR';
import FooterNavList from './core/components/nav/list/FooterNavList';
import FooterSocial from "./core/components/social/FooterSocial";
import FooterTextBottom from "./core/components/text/FooterTextBottom";

const Footer = () => {
	return (
		<footer className={cl.footer}>
			<div className={cl.main}>
				<LogoR className={cl.logo} />
				<FooterNavList className={cl.list} />
				<FooterSocial className={cl.social} />
			</div>
			<FooterTextBottom />
		</footer>
	);
};

export default Footer;