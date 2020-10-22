import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';

import './css/App.css';


function App()
{
	return (
		<Provider store={ store }>
			<h1>It Works!</h1>
		</Provider>
	);
}

export default App;
