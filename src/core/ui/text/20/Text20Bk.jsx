import React from 'react';
import clCommon from "./core/styles/_TextSize.module.scss";
import TextBk from "../core/text/book/TextBk";

const Text20M = ({ className, children, ...props }) => {
	return <TextBk className={[className, clCommon.text].join(" ")} {...props}>{children}</TextBk>
};

export default Text20M;