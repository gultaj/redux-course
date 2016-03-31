import { createStore } from 'redux';
import rootReducer from '../reducers';

export default function configStore(inititalState) {
	const store = createStore(rootReducer, inititalState);
	if (module.hot) {
		module.hot.accept('../reducers', () => {
			const nextRootReducer = require('../reducers');
			store.replaceReducer(nextRootReducer); 
		});
	}

	return store;
}