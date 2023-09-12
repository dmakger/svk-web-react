import React from 'react';
import TopBarMenuListItemTitle from '../core/components/title/TopBarMenuListItemTitle'
import { Link } from 'react-router-dom';

const TopBarMenuListItemDefault = ({ path, title, className }) => {
	return (
		<Link to={path} className={className}>
			<TopBarMenuListItemTitle title={title} />
		</Link>
	);
};

export default TopBarMenuListItemDefault;