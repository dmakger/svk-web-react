import React, { useState } from 'react';
import cl from './_InputWTBase.module.scss';

const InputWTBase = ({defaultValue, placeholder, className, ...props}) => {
    let _defaultValue = defaultValue;
    if (_defaultValue === undefined) {
        _defaultValue = ''
    }
    const [value, setValue] = useState(_defaultValue)
    const handleChange = (event) => {
        setValue(event.target.value);
      };

    return (
        <input className={`${cl.input} ${className}`} 
                placeholder={placeholder} 
                onChange={handleChange}
                value={value} {...props} />
    );
};

export default InputWTBase;