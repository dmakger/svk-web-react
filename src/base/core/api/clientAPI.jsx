import {URL_API, getParams, request, LOCAL_URL, GLOBAL_URL} from "../../../core/api/mainAPI";

const CLIENT_VERSION = "v1"
// export const CLIENT_URL_API = `${URL_API}/client/${CLIENT_VERSION}`
export const CLIENT_URL_API = `${GLOBAL_URL}/api/client/${CLIENT_VERSION}`


export async function createClientPOST(body, params) {
	const url = `${CLIENT_URL_API}/client/create/${getParams(params)}`
	return await request('POST', url, body)
}

export async function submitApplicationPOST(body, params) {
	const url = `${CLIENT_URL_API}/business-request/create/${getParams(params)}`
	return await request('POST', url, body)
}