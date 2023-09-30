import React from 'react';
import cl from './_FormItemRow.module.scss'
import FormItemAuto from "../auto/FormItemAuto";
import clLink from '../../../../base/core/scss/_link.module.scss';

const FormItemRow = ({data, className, ...props}) => {
    return (
        <div className={`${className} ${cl.block}`} {...props}>
            <p className={`${clLink.content} ${cl.title}`} dangerouslySetInnerHTML={{__html: data.title}} />
            <div className={cl.row}>
                {data.list.map((it, index) => (
                    <FormItemAuto key={index} type={it.type} data={it.data} />
                ))}
            </div>
        </div>
    );
};

export default FormItemRow;