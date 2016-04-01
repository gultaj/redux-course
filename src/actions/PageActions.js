import { PAGE } from '../constants/actionConstants';

export function getPosts(user_id) {
	return (dispatch) => {
		dispatch({
			type: PAGE.GET_POSTS_REQUEST,
			payload: user_id
		});
		fetch('//reactcomments.dev/comments').then(response => response.json())
		.then(posts => dispatch({
			type: PAGE.GET_POSTS_SUCCESS, 
			payload: posts
		}))
		.catch(error => console.log(error));
	}
}
export function getUsers() {
	return (dispatch) => {
		dispatch({type: PAGE.GET_USERS_REQUEST});
		fetch('//reactcomments.dev/users').then(response => response.json())
		.then(users => dispatch({
			type: PAGE.GET_USERS_SUCCESS, 
			payload: users
		}))
		.catch(error => console.log(error));
	}
}