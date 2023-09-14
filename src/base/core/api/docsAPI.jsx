import {getParams, request, URL_API} from "../../../core/api/mainAPI";
import {SYSTEM_URL_API} from "../../system/core/api/systemAPI";

const DOCS_VERSION = "v1"
export const USER_URL_API = `${URL_API}/docs/${DOCS_VERSION}`


// export async function getTOC(params) {
// 	const url = `${USER_URL_API}/toc/${getParams(params)}`
// 	return await request('GET', url)
// }
export async function getTOC(params) {
	const url = `${USER_URL_API}/toc/${getParams(params)}`
	const response = await fetch(url);
	return await response.json();
}

export async function getPage(path, params) {
	const url = `${SYSTEM_URL_API}/page/${path}/${getParams(params)}`
	const response = await fetch(url);
	return await response.json();
}

export async function getBrandPartners(params) {
	const url = `${SYSTEM_URL_API}/brand_partners/${getParams(params)}`
	return await request('GET', url)
}