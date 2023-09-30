import React from 'react';
import FooterSocialItem from "./core/components/FooterSocialItem";
import cl from './_FooterSocial.module.scss'
import vkDefaultSVG from "../../../../../../../../../../core/static/img/vk-white-black.svg";
import vkActiveSVG from '../../../../../../../../../../core/static/img/vk-blue-white.svg'
import tgDefaultSVG from '../../../../../../../../../../core/static/img/tg-white-black.svg'
import tgActiveSVG from '../../../../../../../../../../core/static/img/tg-blue-white.svg'


const FooterSocial = ({className, ...props}) => {
    const TG_TO = 'https://vk.com/sdelano_v_korolyove'
    const VK_TO = 'https://t.me/sdelano_v_korolyove'

    return (
        <div className={`${cl.list} ${className}`} {...props}>
            <FooterSocialItem defaultSVG={tgDefaultSVG}
                              activeSVG={tgActiveSVG}
                              alt={VK_TO} to={VK_TO}/>
            <FooterSocialItem defaultSVG={vkDefaultSVG}
                              activeSVG={vkActiveSVG}
                              alt={TG_TO} to={TG_TO}/>
        </div>
    );
};

export default FooterSocial;