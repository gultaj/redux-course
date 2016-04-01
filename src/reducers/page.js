import { PAGE } from '../constants/actionConstants';

const inititalState = {
	user: 1,
	posts: [{id: 0, text: 'empty'}],
	users: [{id: 1, nickname: 'Unknown'}],
	fetching: false
};

export default function page(state = inititalState, action) {
	switch (action.type) {
		case PAGE.GET_POSTS_REQUEST:
			return {...state, user: action.payload, fetching: true};
		case PAGE.GET_USERS_REQUEST:
			return state;
		case PAGE.GET_POSTS_SUCCESS:
			return {...state, posts: action.payload, fetching: false};
		case PAGE.GET_USERS_SUCCESS:
			return {...state, users: action.payload};			
		default:
			return state;
	}
}