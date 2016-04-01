import { createStore, applyMiddleware } from 'redux';
import { ping } from './enhancers/ping';
import rootReducer from '../reducers';
import thunk from 'redux-thunk'

export default function configStore(inititalState) {
	const store = createStore(
		rootReducer, 
		inititalState,
		applyMiddleware(thunk, ping)
	);

	if (module.hot) {
		module.hot.accept('../reducers', () => {
			const nextRootReducer = require('../reducers');
			store.replaceReducer(nextRootReducer); 
		});
	}

	return store;
}