import React from 'react';
import clCommon from "./core/styles/_TextSize.module.scss";
import TextM from "../core/text/medium/TextM";

const Text20M = ({ className, children, ...props }) => {
	return <TextM className={[className, clCommon.text].join(" ")} {...props}>{children}</TextM>
};

export default Text20M;