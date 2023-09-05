import React from 'react';
import TopBarMenuListItemDefault from '../default/TopBarMenuListItemDefault';
import TopBarMenuListItemContent from '../content/TopBarMenuListItemContent';


const TopBarMenuListItemAuto = ({ path, title, content, className }) => {
	if (content.length !== 0) {
		return <TopBarMenuListItemContent path={path} title={title} content={content} className={className} />
	}

	return (
		<TopBarMenuListItemDefault path={path} title={title} className={className} />
	);
};

export default TopBarMenuListItemAuto;