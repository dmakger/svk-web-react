import React from 'react';
import clWrapper from '../core/components/wrapper/_WrapperButtom.module.scss'
import WrapperButton from "../core/components/wrapper/WrapperButton";
import ButtonBlue from "../../../button/blue/ButtonBlue";
import {SMALL_SIZE} from "../../sizeFormData";

const FormItemButtonBlue = ({type, data, other, className, ...props}) => {
    const isSmall = other.size === SMALL_SIZE
    return (
        <WrapperButton>
            <ButtonBlue title={data.title}
                        type={data.type}
                        className={isSmall ? clWrapper.small : ''}
                        classNameTitle={isSmall ? clWrapper.title : ''}
                        {...props} />
        </WrapperButton>
    );
};

export default FormItemButtonBlue;