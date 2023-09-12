import React from 'react';
import cl from './_ApplicationLink.module.scss';
import { Link } from 'react-router-dom';
import { APPLICATION_URL } from '../../../../../../core/service/urls';
import Text20M from '../../../../../../core/ui/text/20/Text20M';

const ApplicationLink = ({className, ...props}) => {
    return (
        <Link to={APPLICATION_URL} className={`${className} ${cl.application}`} {...props}>
            <Text20M className={cl.text}>Стать партнёром</Text20M>
        </Link>
    );
};

export default ApplicationLink;