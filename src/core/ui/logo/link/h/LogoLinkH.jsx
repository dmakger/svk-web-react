import React, {useState} from 'react';
import { Link } from "react-router-dom";
import { MAIN_URL } from '../../../../service/urls';
import cl from './_LogoLinkH.module.scss'
import logoWhitePNG from '../../../../static/img/logo-h-white.png'
import logoBlackPNG from '../../../../static/img/logo-h-black.png'

const LogoLinkH = ({ className, classNameTitle, ...props }) => {
	const [imageLogo, setImageLogo] = useState(logoWhitePNG)
	// const [isHovered, setIsHovered] = useState(logoWhitePNG)

	const handleMouseEnter = () => {setImageLogo(logoBlackPNG)}
	const handleMouseLeave = () => {setImageLogo(logoWhitePNG)}
	return (
		<Link to={MAIN_URL}
			  onMouseEnter={handleMouseEnter}
			  onMouseLeave={handleMouseLeave}
			  className={[className, cl.link].join(' ')} {...props}>
			<img src={imageLogo} alt='logo' className={cl.logo} />
			{/*<Text32Bl className={[cl.title, classNameTitle].join(" ")}>СДЕЛАНО В КОРОЛЁВЕ</Text32Bl>*/}
		</Link>
	);
};

export default LogoLinkH;