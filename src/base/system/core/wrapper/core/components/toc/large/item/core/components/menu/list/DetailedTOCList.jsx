import React from 'react';
import cl from './_DetailedTOCList.module.scss';
import DetailedTOCItem from "../item/DetailedTOCItem";
import {SYSTEM_URL} from "../../../../../../../../../../../../../core/service/urls";

const DetailedTOCList = ({path, list, className, ...props}) => {
    return (
        <div className={`${className} ${cl.list}`} {...props}>
            {list.map(it => (
                <DetailedTOCItem key={it.path}
                                 to={`${SYSTEM_URL}/${path}/${it.path}`}
                                 path={it.path}
                                 title={it.title} />
            ))}
        </div>
    );
};

export default DetailedTOCList;