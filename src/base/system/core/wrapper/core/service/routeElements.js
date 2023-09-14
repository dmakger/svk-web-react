import {ABOUT_BRAND_BRAND_SUPPORT_URL, SYSTEM__CHILD_URL} from "../../../../../../core/service/urls";
import SystemPage from "../../../../system/SystemPage";
import BrandSupportPage from "../../../../brand-support/BrandSupportPage";

export const routeSystemElements = [
    { path: ABOUT_BRAND_BRAND_SUPPORT_URL, element: BrandSupportPage },
    { path: SYSTEM__CHILD_URL, element: SystemPage },
];