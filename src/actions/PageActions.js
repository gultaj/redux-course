import { PAGE } from '../constants/actionConstants';

export function setUser(user) {
	return {
		type: PAGE.SET_USER,
		payload: user
	}
}

export function getPosts(user_id) {
	return (dispatch) => {
		dispatch({
			type: PAGE.GET_POSTS_REQUEST,
			payload: user_id
		});
		fetch('//reactcomments.dev/users').then(response => response.json())
		.then(posts => dispatch({
			type: PAGE.GET_POSTS_SUCCESS, 
			payload: posts
		}))
		.catch(error => console.log(error));
	}
}