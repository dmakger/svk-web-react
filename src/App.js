import {BrowserRouter, Route, Outlet} from 'react-router-dom'
import './App.css';

import BaseWrapper from './base/core/wrapper/base/BaseWrapper';
import MainPage from './base/main/MainPage';
import BrandPartnerPage from './base/brand_partner/this/BrandPartnerPage';
import BrandPartnerDetailPage from './base/brand_partner/detail/BrandPartnerDetailPage';
import {MAIN_URL, BRAND_PARTNER_URL, ARTICLE_URL} from './core/service/urls';
import ArticleBrandPage from './base/article/brand/ArticleBrandPage';
import ScrollToTop from './core/service/ScrollToTop';
import SystemWrapper from "./base/system/core/wrapper/SystemWrapper";
import {routeSystemElements} from "./base/system/core/wrapper/core/service/routeElements";


function App() {
    return (
        <BrowserRouter>
            <ScrollToTop/>
            <BaseWrapper>
                <Route path={MAIN_URL} element={<MainPage/>}/>

                <Route path={`${BRAND_PARTNER_URL}/`} element={<BrandPartnerPage/>}/>
                <Route path={`${BRAND_PARTNER_URL}/:path`} element={<BrandPartnerDetailPage/>}/>

                <Route path={`${ARTICLE_URL}/:path`} element={<ArticleBrandPage/>}/>

                <Route element={
                    <SystemWrapper>
                        <Outlet/>
                    </SystemWrapper>
                }>
                    {/*<Route path={ABOUT_BRAND__ABOUT_US_URL} element={<SystemPage/>}/>*/}
                    {routeSystemElements.map((route, index) => (
                        <Route key={index} path={route.path} element={<route.element />} />
                    ))}
                </Route>
            </BaseWrapper>
        </BrowserRouter>
    );
}

export default App;
