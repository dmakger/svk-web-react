import {ABOUT_BRAND_BRAND_SUPPORT_URL, APPLICATION_URL, SYSTEM__CHILD_URL} from "../../../../../../core/service/urls";
import SystemPage from "../../../../system/SystemPage";
import BrandSupportPage from "../../../../brand-support/BrandSupportPage";
import SubmitApplicationPage from "../../../../submit-application/SubmitApplicationPage";


export const routeSystemElements = [
    { path: APPLICATION_URL, element: SubmitApplicationPage },
    { path: ABOUT_BRAND_BRAND_SUPPORT_URL, element: BrandSupportPage },
    { path: SYSTEM__CHILD_URL, element: SystemPage },
];