import React from 'react';
import Text20M from '../../../../../../../../../../../core/ui/text/20/Text20M';
import cl from './_FooterNavItem.module.scss'
import { Link } from 'react-router-dom';
import Text20B from "../../../../../../../../../../../core/ui/text/20/Text20B";

const FooterNavItem = ({ path, title, content, className, ...props }) => {
	const parentURL = path === null ? '' : `${path}/`

	return (
		<div className={className} {...props}>
			<Text20B className={cl.title}>{title}</Text20B>
			<div className={cl.line}/>
			<div className={cl.content}>
				{content.map(it => (
					<Link key={it.path} to={`${parentURL}${it.path}`}>
						<Text20M className={cl.item}>{it.title}</Text20M>
					</Link>
				))}
			</div>
		</div>
	);
};

export default FooterNavItem;