import React, {useState} from 'react';
import Size from "../../../../../../../../core/service/Size";
import TOCList from "../large/list/TOCList";
import TocBarList from "../bar/list/TocBarList";

const TocAuto = ({toc, className, ...props}) => {
    const [is1200, setIs1200] = useState(false)
    return (
        <>
            {is1200 ? (
                <TocBarList toc={toc} className={className} {...props} />
            ) : (
                <TOCList toc={toc} className={className} {...props}/>
            )}
            <Size width={1200} set={setIs1200} />
        </>
    );
};

export default TocAuto;