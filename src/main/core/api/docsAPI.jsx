import { URL_API, getParams } from "../../../core/api/mainAPI";

const DOCS_VERSION = "v1"
export const USER_URL_API = `${URL_API}/docs/${DOCS_VERSION}`


// export async function getTOC(params) {
// 	const url = `${USER_URL_API}/toc/${getParams(params)}`
// 	return await request('GET', url)
// }
export async function getTOC(params) {
	const url = `${USER_URL_API}/toc/${getParams(params)}`
	const response = await fetch(url);
	const data = await response.json();
	return data;
}