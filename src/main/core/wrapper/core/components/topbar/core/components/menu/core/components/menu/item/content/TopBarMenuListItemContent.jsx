import React, { useState } from 'react';
import TopBarMenuListItemTitle from '../core/components/title/TopBarMenuListItemTitle'


const TopBarMenuListItemContent = ({ title, content, className }) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div className={className}>
			<TopBarMenuListItemTitle title={title} />

		</div>
	);
};

export default TopBarMenuListItemContent;