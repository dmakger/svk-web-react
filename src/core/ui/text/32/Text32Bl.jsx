import React from 'react';
import clCommon from "./core/styles/_TextSize.module.scss";
import TextBl from "../core/text/bold/TextBl";

const Text32Bl = ({ className, children, ...props }) => {
	return <TextBl className={[className, clCommon.text].join(" ")} {...props}>{children}</TextBl>
};

export default Text32Bl;