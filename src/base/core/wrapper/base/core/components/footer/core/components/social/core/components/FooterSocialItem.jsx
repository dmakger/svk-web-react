import React, {useState} from 'react';
import cl from './_FooterSocialItem.module.scss';

const FooterSocialItem = ({to, defaultSVG, activeSVG, alt, className, ...props}) => {
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <a href={to} target="_blank" rel="noopener noreferrer"
           className={`${className} ${cl.item}`}
           onMouseEnter={handleMouseEnter}
           onMouseLeave={handleMouseLeave}
           {...props}
        >
            <img alt={alt} src={defaultSVG}
                 className={`${cl.image} ${hovered ? cl.hidden : cl.visible}`}/>
            <img alt={alt} src={activeSVG}
                 className={`${cl.image} ${hovered ? cl.visible : cl.hidden}`}/>
        </a>
    );
};

export default FooterSocialItem;