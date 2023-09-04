import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';

import MainPage from './main/main/MainPage';
import MainWrapper from './main/core/wrapper/MainWrapper';

function App() {
	return (
		<BrowserRouter>
			<MainWrapper>
				<Route path="/" element={<MainPage />} />
			</MainWrapper>
		</BrowserRouter>
	);
}

export default App;
