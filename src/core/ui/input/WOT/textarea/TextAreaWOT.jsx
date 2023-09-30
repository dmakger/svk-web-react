import React, {useState} from 'react';
import cl from "./_TextAreaWOT.module.scss";
import {cls} from "../../../../service/cls";

const TextAreaWOT = ({data, className, ...props}) => {
    let _defaultValue = data.value;
    if (_defaultValue === undefined) {
        _defaultValue = ''
    }
    const [value, setValue] = useState(_defaultValue)
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <textarea className={cls(cl.input, className)}
                  onChange={handleChange}
                  value={value} {...data} {...props} />
    );
};

export default TextAreaWOT;