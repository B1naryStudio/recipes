import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import store from './stores';

import App from './components/App';
import Collection from './components/Collection';
import Recipe from './containers/Recipe';
import RecipeEdit from './containers/RecipeEdit';

const history = syncHistoryWithStore(hashHistory, store);
render(
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={Collection} />
				<Route path="/:id" component={Recipe} />
				<Route path="/:id/edit" component={RecipeEdit} />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('root')
);