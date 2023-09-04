import React from 'react';
import TopBarMenuListItemAuto from '../item/auto/TopBarMenuListItemAuto';
import cl from './_TopBarMenuList.module.scss';
import { useSelector } from 'react-redux';
import { selectMenuData } from '../../../../../../../../../selectors/menu';

const TopBarMenuList = () => {
	const menuData = useSelector(selectMenuData);
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