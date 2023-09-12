import React from 'react';
import Text16B from '../../../../../../../../../../../../../../../../../core/ui/text/16/Text16B';
import cl from './_TopBarMenuListItemTitle.module.scss'

const TopBarMenuListItemTitle = ({ title, className }) => {
	return (
		<Text16B className={[cl.title, className].join(' ')}>{title}</Text16B>
	);
};

export default TopBarMenuListItemTitle;