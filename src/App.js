import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';

import MainWrapper from './main/core/wrapper/MainWrapper';
import MainPage from './main/main/MainPage';
import BrandPartnerPage from './main/brand_partner/this/BrandPartnerPage';
import BrandPartnerDetailPage from './main/brand_partner/detail/BrandPartnerDetailPage';
import { MAIN_URL, BRAND_PARTNER_URL, ARTICLE_URL } from './core/service/urls';
import ArticleBrandPage from './main/article/brand/ArticleBrandPage';
import ScrollToTop from './core/service/ScrollToTop';


function App() {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<MainWrapper>
				<Route path={MAIN_URL} element={<MainPage />} />

				<Route path={`${BRAND_PARTNER_URL}/`} element={<BrandPartnerPage />} />
				<Route path={`${BRAND_PARTNER_URL}/:path`} element={<BrandPartnerDetailPage />} />

				<Route path={`${ARTICLE_URL}/:path`} element={<ArticleBrandPage />} />
			</MainWrapper>
		</BrowserRouter>
	);
}

export default App;
