import { PAGE } from '../constants/actionConstants';

export function setYear(year) {
	return {
		type: PAGE.SET_YEAR,
		payload: year
	}
}