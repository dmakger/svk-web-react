import React from 'react';
import cl from './_TopBarMenuBurgerListItemTitle.module.scss'
import {cls} from "../../../../../../../../../../../../../../../../../../../core/service/cls";
import Text16M from "../../../../../../../../../../../../../../../../../../../core/ui/text/16/Text16M";

const TopBarMenuBurgerListItemTitle = ({ title, isActive, className, children }) => {
	return (
		<div className={cls(cl.block, className, isActive ? cl.active : '')}>
			<Text16M className={cl.title}>{title}</Text16M>
			{children}
		</div>
	);
};

export default TopBarMenuBurgerListItemTitle;