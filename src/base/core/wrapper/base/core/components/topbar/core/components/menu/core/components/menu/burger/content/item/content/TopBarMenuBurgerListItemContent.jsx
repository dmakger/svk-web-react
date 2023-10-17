import React from 'react';
import TopBarMenuListItemContentList from './core/components/list/TopBarMenuListItemContentList';
import TopBarMenuBurgerListItemTitle from "../core/components/title/TopBarMenuBurgerListItemTitle";

const TopBarMenuBurgerListItemContent = ({ title, path, content, className, onClick }) => {

	return (
		<div className={className}>
			<TopBarMenuBurgerListItemTitle title={title} />
			<TopBarMenuListItemContentList
				parentURL={path}
				content={content}
				onClickItem={onClick}/>
		</div>
	);
};

export default TopBarMenuBurgerListItemContent;