import { PAGE } from '../constants/actionConstants';

const inititalState = {
	year: 2016,
	photos: [{}, {}]
};

export default function page(state = inititalState, action) {
	switch (action.type) {
		case PAGE.SET_YEAR:
			return {...state, year: action.payload};
		default:
			return state;
	}
}