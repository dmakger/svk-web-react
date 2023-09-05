import React from 'react';
import cl from './_FooterNavList.module.scss'
import { useSelector } from 'react-redux';
import { selectMenuData } from '../../../../../../selectors/menu';
import FooterNavItem from '../item/FooterNavItem';

const FooterNavList = ({ className, ...props }) => {
	let menuData = getNavigationList(useSelector(selectMenuData));
	return (
		<div className={`${cl.list} ${className}`} {...props}>
			{menuData.map(it => (
				<FooterNavItem
					key={it.path}
					title={it.title}
					path={it.path}
					content={it.pages}
				// className={}
				/>
			))}
		</div>
	);
};

const getNavigationList = (data) => {
	if (data.length === 0)
		return data

	const result = [{
		title: 'Навигация',
		path: null,
		pages: []
	}]

	for (let nav of data) {
		if (nav.pages.length === 0 || nav.pages === undefined) {
			result[0].pages.push({
				title: nav.title,
				path: nav.path,
			})
		} else {
			result.push(nav)
		}
	}
	console.log(result)
	return result
}

export default FooterNavList;