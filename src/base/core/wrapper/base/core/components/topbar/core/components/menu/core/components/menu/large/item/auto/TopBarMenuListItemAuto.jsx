import React from 'react';
import TopBarMenuListItemDefault from '../default/TopBarMenuListItemDefault';
import TopBarMenuListItemContent from '../content/TopBarMenuListItemContent';


const TopBarMenuListItemAuto = ({ path, title, content, isActive, className }) => {
	if (content.length !== 0) {
		return <TopBarMenuListItemContent path={`docs/${path}`} title={title} content={content} isActive={isActive} className={className} />
	}

	return (
		<TopBarMenuListItemDefault path={path} title={title} isActive={isActive} className={className} />
	);
};

export default TopBarMenuListItemAuto;