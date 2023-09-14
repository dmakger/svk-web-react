import React from 'react';
import InputWTBase from '../../WT/base/InputWTBase';
import cl from './_InputWOTBase.module.scss'
import Text24Bk from '../../../text/24/Text24Bk'

const InputWOTBase = ({defaultValue, placeholder, title, type, other, className,  ...props}) => {
    return (
        <div className={`${className} ${cl.block}`} {...props}>
            <Text24Bk className={cl.title}>{title}</Text24Bk>
            <InputWTBase placeholder={placeholder} 
                        defaultValue={defaultValue} 
                        className={cl.input}
                        type={type}
                        {...other} />
        </div>
    );
};

export default InputWOTBase;