import React from 'react';
import Text16B from '../../../../../../../../../../../../../../../../../../core/ui/text/16/Text16B';
import cl from './_TopBarMenuListItemTitle.module.scss'

const TopBarMenuListItemTitle = ({ title, isActive, className, children }) => {
	return (
		<div className={`${cl.block} ${className} ${isActive ? cl.active : ''}`}>
			<Text16B className={[cl.title].join(' ')}>{title}</Text16B>
			{children}
		</div>
	);
};

export default TopBarMenuListItemTitle;