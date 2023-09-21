import {URL_API, getParams, request, LOCAL_URL, GLOBAL_URL} from "../../../core/api/mainAPI";

const CLIENT_VERSION = "v1"
export const CLIENT_URL_API = `${URL_API}/client/${CLIENT_VERSION}`
// export const CLIENT_URL_API = `${LOCAL_URL}/api/client/${CLIENT_VERSION}`


export async function createClientPOST(body, params) {
	const url = `${CLIENT_URL_API}/client/create/${getParams(params)}`
	const bodyJSON = JSON.stringify(body)
	return await request('POST', url, bodyJSON)
}

export async function submitApplicationPOST(body, params) {
	const url = `${CLIENT_URL_API}/business-request/create/${getParams(params)}`
	const bodyJSON = JSON.stringify(body)
	return await request('POST', url, bodyJSON)
}