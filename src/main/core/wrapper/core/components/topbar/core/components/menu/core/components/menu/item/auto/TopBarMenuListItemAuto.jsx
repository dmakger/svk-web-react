import React from 'react';
import TopBarMenuListItemDefault from '../default/TopBarMenuListItemDefault';


const TopBarMenuListItemAuto = ({ path, title, content, className }) => {
	// if (content.length !== 0) {
	// 	itemHTML = (
	// 		<TopBarMenuListItemTitle title={title} />
	// 	)
	// }

	return (
		<TopBarMenuListItemDefault path={path} title={title} className={className} />
	);
};

export default TopBarMenuListItemAuto;