import React, {useState} from 'react';
import TopBarMenuList from './core/components/menu/large/list/TopBarMenuLargeList';
import { useSelector } from 'react-redux';
import { selectMenuData } from '../../../../../selectors/menu';
import Size from "../../../../../../../../../../core/service/Size";
import TopBarMenuBurger from "./core/components/menu/burger/TopBarMenuBurger";
import cl from './_TopBarMenu.module.scss'

const TopBarMenu = () => {
	const menuData = useSelector(selectMenuData);
	const [is1024, setIs1024] = useState(false);

	return (
		<>
			{is1024
				? <TopBarMenuBurger menuData={menuData} className={cl.burger} />
				: <TopBarMenuList menuData={menuData} />
			}
			<Size width={1024} set={setIs1024} />
		</>
	);
};

export default TopBarMenu;