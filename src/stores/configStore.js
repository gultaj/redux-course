import { createStore, applyMiddleware } from 'redux';
import { ping } from './enhancers/ping';
import rootReducer from '../reducers';

export default function configStore(inititalState) {
	const store = createStore(
		rootReducer, 
		inititalState,
		applyMiddleware(ping)
	);

	if (module.hot) {
		module.hot.accept('../reducers', () => {
			const nextRootReducer = require('../reducers');
			store.replaceReducer(nextRootReducer); 
		});
	}

	return store;
}