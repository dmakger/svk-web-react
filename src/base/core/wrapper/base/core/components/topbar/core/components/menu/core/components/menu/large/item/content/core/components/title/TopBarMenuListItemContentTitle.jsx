import React, { useState } from 'react';
import cl from './_TopBarMenuListItemContentTitle.module.scss'
import TopBarMenuListItemTitle from '../../../../core/components/title/TopBarMenuListItemTitle';
import { cls } from '../../../../../../../../../../../../../../../../../../../core/service/cls';
import ArrowDownWhiteSVG from '../../../../../../../../../../../../../../../../../../../core/static/img/arrow-down-white-fill.svg';


const TopBarMenuListItemContentTitle = ({ title, isActive, className, ...props }) => {
	const [isHovered, setIsHovered] = useState(false);
	const handleMouseEnter = () => {
		setIsHovered(true)
	}
	const handleMouseLeave = () => {
		setIsHovered(false)
	}

	return (
		<nav className={cls(className, cl.block)} {...props}
             onMouseEnter={handleMouseEnter}
             onMouseLeave={handleMouseLeave}>
			<TopBarMenuListItemTitle title={title}
									 className={`${cl.title} ${isHovered ? cl.active : ''}`}
									 children={
										 <img alt={'Стрелка в низ'} src={ArrowDownWhiteSVG} className={`${cl.image} ${isActive ? cl.active : ''}`} />
									 }/>
		</nav>
	);
};

export default TopBarMenuListItemContentTitle;