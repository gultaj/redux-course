import React, { Component, PropTypes } from 'react';

export default class Page extends Component {
	static propTypes = {
		year: PropTypes.number.isRequired,
		photos: PropTypes.array.isRequired
	};

	render() {
		const { year, photos } = this.props
		return <div>
			<p>У тебя {photos.length} фото за {year} год?</p>
		</div>;
	}
}