export const LOCAL_URL = 'http://127.0.0.1:8000';
export const GLOBAL_URL = 'http://api.sdelanovkorolyove.ru';
export const URL_API = `${GLOBAL_URL}/api`;

export const HEADERS = {
	'Content-Type': 'application/json',
	// 'Content-Type': 'multipart/form-data',
	'Accept': 'application/json',
}

// Получение заголовков для запросов
export function getHeaders() {
	return HEADERS
}

export function getParams(params) {
	if (params === undefined || params === null || params.length === 0)
		return ''

	let paramsStr = []
	for (let key in params)
		if (params[key] !== undefined && params[key] !== null)
			paramsStr.push(`${key}=${params[key]}`)
	if (paramsStr.length)
		return `?${paramsStr.join('&')}`
	return paramsStr
}

export function getURL(url, params) {
	return url + getParams(params)
}

export async function request(method, url, body, headers) {
	const data = {
		method: method,
		credentials: 'include',
		headers: getHeaders(),
		body: body
	}
	if (headers !== undefined) {
		data.headers = headers
	}
	const res = await fetch(url, data)
	if (res.ok) {
		return await res.json();
	}
	return Promise.reject(res);
}
