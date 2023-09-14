import React, { useEffect, useRef, useState } from 'react';
import TopBarMenuListItemContentTitle from './core/components/title/TopBarMenuListItemContentTitle';
import TopBarMenuListItemContentList from './core/components/list/TopBarMenuListItemContentList';
import cl from './_TopBarMenuListItemContent.module.scss'

const TopBarMenuListItemContent = ({ title, path, content, className }) => {
	const [isContentVisible, setContentVisible] = useState(false);
	const titleRef = useRef(null);

	const toggleContent = () => {
		setContentVisible(!isContentVisible);
	};

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (titleRef.current && !titleRef.current.contains(event.target)) {
				setContentVisible(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return (
		<div className={`${className} ${cl.block}`} onClick={toggleContent} ref={titleRef}>
			<TopBarMenuListItemContentTitle title={title} />
			<TopBarMenuListItemContentList
				parentURL={path}
				content={content}
				className={`${cl.content} ${isContentVisible ? cl.showContent : ''}`} />
		</div>
	);
};

export default TopBarMenuListItemContent;