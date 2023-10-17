import React from 'react';
import TopBarMenuBurgerListItemDefault from '../default/TopBarMenuBurgerListItemDefault';
import TopBarMenuBurgerListItemContent from '../content/TopBarMenuBurgerListItemContent';


const TopBarMenuBurgerListItemAuto = ({ path, title, content, isActive, className, onClick, ...props }) => {
	if (content.length !== 0) {
		return <TopBarMenuBurgerListItemContent path={`docs/${path}`} title={title} content={content} isActive={isActive} className={className} onClick={onClick} {...props} />
	}

	return (
		<TopBarMenuBurgerListItemDefault path={path} title={title} isActive={isActive} className={className} onClick={onClick} {...props} />
	);
};

export default TopBarMenuBurgerListItemAuto;