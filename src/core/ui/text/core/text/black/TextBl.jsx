import React from 'react';

import cl from "./_TextBl.module.scss";
import Text from "../core/text/Text";

const TextBl = ({ className, children, ...props }) => {
	return <Text className={[className, cl.text].join(" ")} {...props}>{children}</Text>
};

export default TextBl;