import React from 'react';
import cl from './_FooterTextBottom.module.scss'
import Text16M from "../../../../../../../../../../core/ui/text/16/Text16M";

const FooterTextBottom = () => {
    const text = '© 2023 ООО «Креативные исследования» при грантовой поддержке «Студенческий стартап» Фонда содействия инновациям'
    const link = 'https://t.me/dmakger'
    return (
        <div className={cl.block}>
            <div className={cl.content}>
                <Text16M className={cl.text}>{text}</Text16M>
                <a href={link} target="_blank" rel="noopener noreferrer" className={cl.dev}>
                    <Text16M className={cl.text}>Разработано: dmakger</Text16M>
                </a>
            </div>
        </div>
    );
};

export default FooterTextBottom;