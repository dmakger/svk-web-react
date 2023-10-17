import React, {useState} from 'react';
import logoWhiteSVG from "../../../../static/img/logo-white-r.svg";
import logoBlackSVG from "../../../../static/img/logo-black-r.svg";
import {Link} from "react-router-dom";
import {MAIN_URL} from "../../../../service/urls";
import cl from "./_LogoLinkR.module.scss";

const LogoLinkR = ({ className, classNameTitle, ...props }) => {
    const [imageLogo, setImageLogo] = useState(logoWhiteSVG)
    // const [isHovered, setIsHovered] = useState(logoWhitePNG)

    const handleMouseEnter = () => {setImageLogo(logoBlackSVG)}
    const handleMouseLeave = () => {setImageLogo(logoWhiteSVG)}
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

export default LogoLinkR;