import React  from 'react';
import { Link } from 'react-router-dom';
import clLink from '../../../../base/core/scss/_link.module.scss'

const BaseLink = ({className, children, to, usNewPage, ...props}) => {
    if (usNewPage) {
        return (
            <a href={to} 
                target="_blank" rel="noopener noreferrer" 
                className={`${className} ${clLink.link}`} {...props}
            >
                {children}
            </a>
        )
    }
    return (
        <Link to={to} className={`${className} ${clLink.link}`} {...props}>{children}</Link>
    );
};

export default BaseLink;