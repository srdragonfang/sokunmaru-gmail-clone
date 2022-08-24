import React from 'react';
import './styles/index.css';
import Header from './components/Header';
import SideLeft from './components/SideLeft';
import Mail from './components/Mail';
import MailList from './components/MailList';

import SideRight from './components/SideRight';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
	return (
		<BrowserRouter>
			<div className='app'>
				<Header />
				<div className='post'>
					<SideLeft />
					<div className='feed'>
						<Routes>
							<Route path='/mail' element={<Mail />} />
							<Route path='/' element={<MailList />} />
						</Routes>
					</div>
					<SideRight />
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
