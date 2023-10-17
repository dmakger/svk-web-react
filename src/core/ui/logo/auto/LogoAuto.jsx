import React, {useState} from 'react';
import Size from "../../../service/Size";
import LogoLinkH from "../link/h/LogoLinkH";
import {cls} from "../../../service/cls";
import LogoLinkR from "../link/r/LogoLinkR";

const LogoAuto = ({ className, classNameR, classNameH, ...props }) => {
    const [is1200, setIs1200] = useState(false);
    const [is1024, setIs1024] = useState(false);
    const [is480, setIs480] = useState(false);

    const isR = () => {
        if ((is1200 && !is1024) || (is480))
            return <LogoLinkR className={cls(classNameR, className)} {...props} />
        return <LogoLinkH className={cls(classNameH, className)} {...props} />
    }

    return (
        <>
            {isR()}
            <Size width={1200} set={setIs1200} />
            <Size width={1024} set={setIs1024} />
            <Size width={480} set={setIs480} />
        </>
    );
};

export default LogoAuto;