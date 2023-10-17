import React from 'react';
import TopBarMenuBurgerListItemTitle from '../core/components/title/TopBarMenuBurgerListItemTitle'
import { Link } from 'react-router-dom';

const TopBarMenuBurgerListItemDefault = ({ path, title, isActive, className, ...props }) => {
	return (
		<Link to={path} className={className} {...props}>
			<TopBarMenuBurgerListItemTitle title={title} isActive={isActive}/>
		</Link>
	);
};

export default TopBarMenuBurgerListItemDefault;