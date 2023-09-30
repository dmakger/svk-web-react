import {getParams, request, URL_API} from "../../../core/api/mainAPI";

const BUGS_VERSION = "v1"
export const BUGS_URL_API = `${URL_API}/bugs/${BUGS_VERSION}`



export async function createRequestAboutBug(body, params) {
	const url = `${BUGS_URL_API}/bug/create/${getParams(params)}`
	const bodyJSON = JSON.stringify(body)
	return await request('POST', url, bodyJSON)
}