import {getParams, request, URL_API} from "../../../../core/api/mainAPI";

const SYSTEM_VERSION = "v1"
export const SYSTEM_URL_API = `${URL_API}/docs/${SYSTEM_VERSION}`


// SYSTEM
export async function getTOC(params) {
    const url = `${SYSTEM_URL_API}/toc/${getParams(params)}`
    return await request('GET', url)
}

export async function getPage(path, params) {
    const url = `${SYSTEM_URL_API}/page/${path}/${getParams(params)}`
    return await request('GET', url)
}