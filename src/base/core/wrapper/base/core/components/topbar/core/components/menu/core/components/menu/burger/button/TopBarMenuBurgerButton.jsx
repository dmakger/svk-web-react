import React from 'react';
import burgerMenuSVG from '../../../../../../../../../../../../../../../core/static/img/menu-burger-fill-white.svg'
import closeWhiteSVG from '../../../../../../../../../../../../../../../core/static/img/close-fill-white.svg'
import cl from './_TopBarMenuBurgerButton.module.scss'
import {cls} from "../../../../../../../../../../../../../../../core/service/cls";

const TopBarMenuBurgerButton = ({onClick, isVisible, btnRef, className, ...props}) => {
    return (
        <button className={cls(cl.button, className)} onClick={onClick} ref={btnRef} {...props}>
            {isVisible ? (
                <img src={closeWhiteSVG} alt={'close menu'} className={cl.image}/>
            ) : (
                <img src={burgerMenuSVG} alt={'burger menu'} className={cl.image}/>
            )}
        </button>
    );
};

export default TopBarMenuBurgerButton;