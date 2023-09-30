import React from 'react';
import clWrapper from '../core/components/wrapper/_WrapperButtom.module.scss'
import ButtonWhite from "../../../button/white/ButtonWhite";
import WrapperButton from "../core/components/wrapper/WrapperButton";
import {SMALL_SIZE} from "../../sizeFormData";

const FormItemButtonWhite = ({type, data, other, className, ...props}) => {
    const isSmall = other.size === SMALL_SIZE
    return (
        <WrapperButton>
            <ButtonWhite title={data.title}
                         type={data.type}
                         className={isSmall ? clWrapper.small : ''}
                         classNameTitle={isSmall ? clWrapper.title : ''}
                         {...props} />
        </WrapperButton>
    );
};

export default FormItemButtonWhite;