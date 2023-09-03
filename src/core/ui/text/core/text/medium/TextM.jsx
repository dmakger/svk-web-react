import React from 'react';

import cl from "./_TextM.module.scss";
import Text from "../core/text/Text";

const TextM = ({ className, children, ...props }) => {
	return <Text className={[className, cl.text].join(" ")} {...props}>{children}</Text>
};

export default TextM;