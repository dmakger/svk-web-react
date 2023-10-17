import React, {useState} from 'react';
import cl from './_Footer.module.scss'
import LogoR from '../../../../../../../core/ui/logo/r/LogoR';
import FooterNavList from './core/components/nav/list/FooterNavList';
import FooterSocial from "./core/components/social/FooterSocial";
import FooterTextBottom from "./core/components/text/FooterTextBottom";
import Size from "../../../../../../../core/service/Size";
import {cls} from "../../../../../../../core/service/cls";

const Footer = () => {
	const [is768, setIs768] = useState(false)

	return (
		<footer className={cl.footer}>
			<div className={cl.main}>
				<LogoR className={cl.logo} />
				<FooterNavList className={cls(cl.list, is768 ? cl.nonVisible : '')} />
				<FooterSocial className={cl.social} />
			</div>
			<FooterTextBottom />
			<Size width={768} set={setIs768} />
		</footer>
	);
};

export default Footer;