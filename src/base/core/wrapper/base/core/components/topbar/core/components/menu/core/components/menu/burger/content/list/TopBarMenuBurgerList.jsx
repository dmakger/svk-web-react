import React from 'react';
import TopBarMenuBurgerListItemAuto from '../item/auto/TopBarMenuBurgerListItemAuto';
import cl from './_TopBarMenuBurgerList.module.scss';
import {cls} from "../../../../../../../../../../../../../../../../core/service/cls";

const TopBarMenuBurgerList = ({className, menuData, burgerRef, onClickItem, ...props}) => {
    return (
        <div className={cls(cl.list, className)} ref={burgerRef} {...props}>
            {menuData.map(it => (
                <TopBarMenuBurgerListItemAuto key={it.id}
                                              path={it.path}
                                              title={it.title}
                                              content={it.pages}
                                              onClick={onClickItem}
                                              isActive={it.id === 4}/>
            ))}
        </div>
    );
};

export default TopBarMenuBurgerList;