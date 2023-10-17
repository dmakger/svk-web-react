import React, {useState, useEffect, useRef} from 'react';
import cl from './_TopBarMenuBurger.module.scss'
import {cls} from "../../../../../../../../../../../../../../core/service/cls";
import TopBarMenuBurgerButton from "./button/TopBarMenuBurgerButton";
import TopBarMenuBurgerList from "./content/list/TopBarMenuBurgerList";

const TopBarMenuBurger = ({menuData, className, ...props}) => {
    const [isVisible, setIsVisible] = useState(false)
    const burgerRef = useRef(null);
    const btnRef = useRef(null);
    const handleOnClick = () => {
        setIsVisible(!isVisible)
    }


    useEffect(() => {
        const handleClickOutside = (event) => {
            if ((burgerRef.current && !burgerRef.current.contains(event.target))
                && (btnRef.current && !btnRef.current.contains(event.target))) {
                setIsVisible(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            <TopBarMenuBurgerButton onClick={handleOnClick} isVisible={isVisible} btnRef={btnRef}
                                    className={className} {...props} />
            <TopBarMenuBurgerList menuData={menuData} burgerRef={burgerRef} onClickItem={() => setIsVisible(false)}
                                  className={cls(cl.list, isVisible ? cl.visible : '')}/>
        </>
    );
};

export default TopBarMenuBurger;