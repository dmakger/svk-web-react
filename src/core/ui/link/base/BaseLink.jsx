import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cl from './_BaseLink.module.scss'

const BaseLink = ({className, children, to, usNewPage, ...props}) => {
    if (usNewPage) {
        return (
            <a href={to} 
                target="_blank" rel="noopener noreferrer" 
                className={`${className} ${cl.link}`} {...props}
            >
                {children}
            </a>
        )
    }
    return (
        <Link to={to} className={`${className} ${cl.link}`} {...props}>{children}</Link>
    );
};

export default BaseLink;