import React from 'react';
import cl from './_TopBarMenuListItemContentItem.module.scss';
import {cls} from "../../../../../../../../../../../../../../../../../../../../core/service/cls";
import { Link } from 'react-router-dom';
import Text16M from "../../../../../../../../../../../../../../../../../../../../core/ui/text/16/Text16M";

const TopBarMenuListItemContentItem = ({ url, title, className, onClick, ...props }) => {
	return (
		<Link to={url} className={cls(cl.block, className)} onClick={onClick} {...props}>
			<div className={cl.line} />
			<Text16M className={cl.title}>{title}</Text16M>
		</Link>
	);
};

export default TopBarMenuListItemContentItem;