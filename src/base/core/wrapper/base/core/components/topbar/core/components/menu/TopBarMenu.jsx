import React, {useState} from 'react';
import TopBarMenuBurgerList from './core/components/menu/burger/list/TopBarMenuBurgerList';
import TopBarMenuList from './core/components/menu/large/list/TopBarMenuLargeList';
import { useSelector } from 'react-redux';
import { selectMenuData } from '../../../../../selectors/menu';
import Size from "../../../../../../../../../../core/service/Size";

const TopBarMenu = () => {
	const menuData = useSelector(selectMenuData);
	const [is1200, setIs1200] = useState(false);

	return (
		<TopBarMenuList menuData={menuData} />
		// <>
		// 	{is1200
		// 		? <TopBarMenuBurgerList menuData={menuData} />
		// 		: <TopBarMenuList menuData={menuData} />
		// 	}
		// 	<Size width={1200} set={setIs1200} />
		// </>
	);
};

export default TopBarMenu;