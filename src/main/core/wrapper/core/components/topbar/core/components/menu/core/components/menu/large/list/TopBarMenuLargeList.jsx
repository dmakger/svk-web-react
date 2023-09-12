import React from 'react';
import TopBarMenuListItemAuto from '../item/auto/TopBarMenuListItemAuto';
import cl from './_TopBarMenuLargeList.module.scss';

const TopBarMenuList = ({menuData}) => {
	return (
		<div className={cl.list}>
			{menuData.map(it => (
				<TopBarMenuListItemAuto key={it.id}
					path={it.path}
					title={it.title}
					content={it.pages}
					className={cl.item} />
			))}
		</div>
	);
};

export default TopBarMenuList;