import React from 'react';
import cl from './_TopBarMenuListItemContentList.module.scss'
import TopBarMenuListItemContentItem from '../item/TopBarMenuListItemContentItem';

const TopBarMenuListItemContentList = ({ parentURL, content, className, ...props }) => {
	return (
		<div className={`${cl.list} ${className}`} {...props}>
			{content.map(it => (
				<TopBarMenuListItemContentItem key={it.path} title={it.title}
					url={`${parentURL}/${it.path}`} />
			))}
		</div>
	);
};

export default TopBarMenuListItemContentList;