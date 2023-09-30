import React from 'react';
import TopBarMenuListItemTitle from '../core/components/title/TopBarMenuListItemTitle'
import { Link } from 'react-router-dom';

const TopBarMenuListItemDefault = ({ path, title, isActive, className }) => {
	return (
		<Link to={path} className={className}>
			<TopBarMenuListItemTitle title={title} isActive={isActive}/>
		</Link>
	);
};

export default TopBarMenuListItemDefault;