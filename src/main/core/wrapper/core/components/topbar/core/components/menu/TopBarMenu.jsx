import React from 'react';
import TopBarMenuBurgerList from './core/components/menu/burger/list/TopBarMenuBurgerList';
import TopBarMenuList from './core/components/menu/large/list/TopBarMenuLargeList';
import { useSelector } from 'react-redux';
import { selectMenuData } from '../../../../../selectors/menu';

const TopBarMenu = () => {
	const menuData = useSelector(selectMenuData);
	return (
		<>
			{window.innerWidth < 1200 
				? <TopBarMenuBurgerList menuData={menuData} />
				: <TopBarMenuList menuData={menuData} />
			}
		</>
	);
};

export default TopBarMenu;