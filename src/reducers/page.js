import { PAGE } from '../constants/actionConstants';

const inititalState = {
	user: 1,
	posts: [{}],
	users: [1,2,3],
	fetching: false
};

export default function page(state = inititalState, action) {
	switch (action.type) {
		case PAGE.SET_USER:
			return {...state, user: action.payload};
		case PAGE.GET_POSTS_REQUEST:
			return {...state, user: action.payload, fetching: true};
		case PAGE.GET_POSTS_SUCCESS:
			return {...state, posts: action.payload, fetching: false};			
		default:
			return state;
	}
}