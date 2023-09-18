import React from 'react';
import InputWOTBase from '../../WOT/base/InputWOTBase';
import cl from './_InputWTBase.module.scss'
import Text24Bk from '../../../text/24/Text24Bk'

const InputWTBase = ({type, data, className,  ...props}) => {
    return (
        <label className={`${className} ${cl.block}`} {...props}>
            <Text24Bk className={cl.title}>{data.title}</Text24Bk>
            <InputWOTBase type={type} data={data} className={cl.input} />
        </label>
    );
};

export default InputWTBase;