export const MAIN_URL = '/';
export const BRAND_PARTNER_URL = 'brand-partner'
export const ARTICLE_URL = 'article'


// === SYSTEM PAGE ===
// system
export const SYSTEM_URL = `docs`
export const SYSTEM__CHILD_URL = `${SYSTEM_URL}/:path1/:path2`

// about-brand
export const _ABOUT_BRAND_URL = 'about-brand'
export const __BRAND_SUPPORT_URL = 'brand-support'
export const ABOUT_BRAND_BRAND_SUPPORT_URL = `${SYSTEM_URL}/${_ABOUT_BRAND_URL}/${__BRAND_SUPPORT_URL}`

// for-business
export const _FOR_BUSINESS_URL = 'for-business'
export const __STATEMENT_APPLICATION_URL = 'submit-application'
export const APPLICATION_URL = `${SYSTEM_URL}/${_FOR_BUSINESS_URL}/submit-application`
export const FOR_BUSINESS__CHILD_URL = `${_FOR_BUSINESS_URL}/:path`

// contacts
export const _CONTACTS_URL = 'contacts'
export const CONTACTS_URL__CHILD_URL = `${_CONTACTS_URL}/:path`