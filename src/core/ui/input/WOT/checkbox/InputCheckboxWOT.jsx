import React, {useEffect, useState} from 'react';
import cl from './_InputCheckboxWOT.module.scss';
import Text20Bk from "../../../text/20/Text20Bk";

const InputCheckboxWOT = ({ type, data, className, ...props }) => {
    const [isActive, setIsActive] = useState(data.isActive);
    delete data.isActive;

    useEffect(() => {
        if (isActive === undefined) {
            setIsActive(false);
        }
    }, [isActive]);

    const handleOnChange = () => {
        setIsActive(!isActive);
    };

    return (
        <label className={`${cl.customCheckbox} ${className}`} {...props}>
            <input
                type={type}
                checked={isActive}
                onChange={handleOnChange} // Добавляем обработчик onChange
                {...data}
            />
            <Text20Bk>{data.title}</Text20Bk>
        </label>
    );
};

export default InputCheckboxWOT;