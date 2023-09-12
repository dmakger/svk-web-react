import React from 'react';
import cl from './_Loading.module.scss';

const Loading = ({className, ...props}) => {
    return (
        <div className={`${className} ${cl.wrapper}`}  {...props}>
            <div className={cl.loading} />
        </div>
    );
};

export default Loading;