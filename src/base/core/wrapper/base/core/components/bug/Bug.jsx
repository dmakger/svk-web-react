import React, {useState, useEffect, useRef} from 'react';
import cl from './_Bug.module.scss'
import {cls} from "../../../../../../../core/service/cls";
import BugButton from "./components/button/BugButton";
import BugForm from "./components/form/BugForm";

const Bug = ({className, ...props}) => {
    const [isActive, setIsActive] = useState(false)
    const bugRef = useRef(null);

    const toggleContent = () => {
        setIsActive(!isActive);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (bugRef.current && !bugRef.current.contains(event.target)) {
                setIsActive(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div ref={bugRef} className={cls(className, cl.block, isActive ? cl.active : '')} {...props}>
            <div className={cl.content}>
                <BugForm className={cl.form} setIsActive={setIsActive}/>
            </div>
            <BugButton className={cl.button} onClick={toggleContent} />
        </div>
    );
};

export default Bug;