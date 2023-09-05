import React, { useState } from 'react';
import cl from './_TopBarMenuListItemContentTitle.module.scss'
import TopBarMenuListItemTitle from '../../../../core/components/title/TopBarMenuListItemTitle';
import { classes } from '../../../../../../../../../../../../../../../../../core/service/classes';
import ArrowDownWhiteSVG from '../../../../../../../../../../../../../../../../../core/static/img/arrow-down-white-fill.svg';
import ArrowDownGraySVG from '../../../../../../../../../../../../../../../../../core/static/img/arrow-down-gray-fill.svg';
import ArrowDownBlueSVG from '../../../../../../../../../../../../../../../../../core/static/img/arrow-down-blue-fill.svg';


const TopBarMenuListItemContentTitle = ({ title, isActive, className, ...props }) => {
	const [isHovered, setIsHovered] = useState(false);
	const [image, setImage] = useState(ArrowDownWhiteSVG);
	const handleMouseEnter = () => {
		setIsHovered(true)
		setImage(ArrowDownGraySVG)
	}
	const handleMouseLeave = () => {
		setIsHovered(false)
		let image = ArrowDownWhiteSVG;
		if (isActive) {
			image = ArrowDownBlueSVG
		}
		setImage(image)
	}

	if (isActive) {
		setImage(ArrowDownBlueSVG)
	}

	return (
		<nav className={classes(className, cl.block)} {...props}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}>
			<TopBarMenuListItemTitle
				title={title}
				className={`${cl.title} ${isHovered ? cl.active : ''}`} />
			<img alt={'Стрелка в низ'} src={image} className={`${cl.image} ${isActive ? cl.active : ''}`} />
		</nav>
	);
};

export default TopBarMenuListItemContentTitle;