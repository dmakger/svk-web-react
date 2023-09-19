import React from 'react';
import ButtonBlue from "../../../../../../../../../../../core/ui/button/blue/ButtonBlue";
import cl from './_FormItemButton.module.scss';

const FormItemButton = ({type, data, className, ...props}) => {
    return (
        <div className={cl.row}>
            <ButtonBlue title={data.title} type={data.type} {...props} />
        </div>
        // <Bu
    );
};

export default FormItemButton;