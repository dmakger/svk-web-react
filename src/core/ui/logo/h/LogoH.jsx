import React from 'react';
import { Link } from "react-router-dom";
import { MAIN_URL } from '../../../service/urls';
import cl from './_LogoH.module.scss'
import Text32Bl from '../../text/32/Text32Bl';
import logoSVG from '../../../static/img/logo-o.svg'

const LogoH = ({ className, classNameTitle, ...props }) => {
	return (
		<Link to={MAIN_URL} className={[className, cl.link].join(' ')} {...props}>
			<img src={logoSVG} alt='logo' className={cl.logo} />
			<Text32Bl className={[cl.title, classNameTitle].join(" ")}>СДЕЛАНО В КОРОЛЁВЕ</Text32Bl>
		</Link>
	);
};

export default LogoH;