import React from 'react';
import cl from './_TopBarMenuListItemContentItem.module.scss';
import { Link } from 'react-router-dom';
import Text16B from '../../../../../../../../../../../../../../../../../../core/ui/text/16/Text16B';

const TopBarMenuListItemContentItem = ({ url, title, className, ...props }) => {
	return (
		<Link to={url} {...props}>
			<Text16B className={cl.title}>{title}</Text16B>
		</Link>
	);
};

export default TopBarMenuListItemContentItem;