import { URL_API, getParams, request } from "../../../core/api/mainAPI";

const CORE_VERSION = "v1"
export const CORE_URL_API = `${URL_API}/core/${CORE_VERSION}`


// DETAIL PAGE
export async function getBrandPartners(params) {
	const url = `${CORE_URL_API}/brand_partners/${getParams(params)}`
	return await request('GET', url)
}
export async function getBrandSupports(params) {
	const url = `${CORE_URL_API}/brand_supports/${getParams(params)}`
	return await request('GET', url)
}

// BRAND PARTNERS
export async function getBrandPartnersHeader(path, params) {
	const url = `${CORE_URL_API}/brand_partners/${path}/${getParams(params)}`
	return await request('GET', url)
}

export async function getBrandPartnersArticleList(path, params) {
	const url = `${CORE_URL_API}/brand_partners/${path}/article/${getParams(params)}`
	return await request('GET', url)
}

export async function getBrandArticle(path, params) {
	const url = `${CORE_URL_API}/article/${path}/${getParams(params)}`
	return await request('GET', url)
}


