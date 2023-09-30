import React from 'react';
import {LARGE_SIZE, SMALL_SIZE} from "../../../../../../../../form/sizeFormData";
import Text16M from "../../../../../../../../text/16/Text16M";
import Text24Bk from "../../../../../../../../text/24/Text24Bk";

const WrapperWtText = ({size, title, ...props}) => {
    if (size === SMALL_SIZE)
        return <Text16M {...props}>{title}</Text16M>
    if (size === LARGE_SIZE)
        return <Text24Bk {...props}>{title}</Text24Bk>
    return <Text24Bk {...props}>{title}</Text24Bk>
};

export default WrapperWtText;