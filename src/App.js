import React from 'react';
import withStore from './HOCs/withStore';

import './css/App.css';


function App()
{
	return (
		<h1>It Works!</h1>
	);
}

export default withStore( App );
