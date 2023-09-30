export const cls = (...props) => {
	return [...props].filter(it => it !== undefined).join(' ')
} 