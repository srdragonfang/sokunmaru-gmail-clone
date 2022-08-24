import React from 'react';
import './styles/index.css';
import Header from './components/Header';
import Post from './components/Post';

function App() {
	return (
		<div className='app'>
			<Header />
            <Post />
		</div>
	);
}

export default App;
