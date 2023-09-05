import React from 'react';
import cl from './_LogoR.module.scss'
import logoRSVG from '../../../static/img/logo-white-r.svg'

const LogoR = ({ className, ...props }) => {
	return (
		<img src={logoRSVG} alt={'logo'} className={`${cl.logo} ${className}`} {...props} />
	);
};

export default LogoR;