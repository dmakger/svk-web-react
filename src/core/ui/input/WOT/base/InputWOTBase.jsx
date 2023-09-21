import React, {useState} from 'react';
import cl from './_InputWOTBase.module.scss';

const InputWOTBase = ({type, data, className, ...props}) => {
    let _defaultValue = data.value;
    if (_defaultValue === undefined) {
        _defaultValue = ''
    }
    const [value, setValue] = useState(_defaultValue)
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <input className={`${cl.input} ${className}`}
               onChange={handleChange}
               type={type}
               value={value} {...data} {...props} />
    );
};

export default InputWOTBase;