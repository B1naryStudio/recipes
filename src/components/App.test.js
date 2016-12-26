import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import reducer from '../reducers';

it('renders without crashing', () => {
	const div = document.createElement('div');
	const store = createStore(reducer);
	render(
		<Provider store={store}>
			<App />
		</Provider>,
		div
	);
});
