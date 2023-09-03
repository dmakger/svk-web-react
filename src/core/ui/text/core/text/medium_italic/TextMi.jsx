import React from 'react';

import cl from "./_TextMi.module.scss";
import Text from "../core/text/Text";

const TextMi = ({ className, children, ...props }) => {
	return <Text className={[className, cl.text].join(" ")} {...props}>{children}</Text>
};

export default TextMi;