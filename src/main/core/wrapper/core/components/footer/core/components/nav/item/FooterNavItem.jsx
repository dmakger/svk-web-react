import React from 'react';
import Text24B from '../../../../../../../../../../core/ui/text/24/Text24B';
import Text20M from '../../../../../../../../../../core/ui/text/20/Text20M';
import cl from './core'

const FooterNavItem = ({ title, content }) => {
	return (
		<div>
			<Text24B className={cl.title}>{title}</Text24B>
			<div className={cl.content}>
				{content.map(it => (
					<Text20M key={it.path}>{it.title}</Text20M>
				))}
			</div>
		</div>
	);
};

export default FooterNavItem;