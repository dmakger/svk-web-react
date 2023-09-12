import React from 'react';
import cl from './_LinkBlue.module.scss';
import { Link } from 'react-router-dom';
import Text24M from '../../text/24/Text24M';

const LinkBlue = ({to, title, className, children, ...props}) => {
    return (
        <Link to={to} className={`${cl.link} ${className}`} {...props}>
            {title &&
                <Text24M className={cl.content}>{title}</Text24M>
            }
            {children}
        </Link>
    );
};

export default LinkBlue;