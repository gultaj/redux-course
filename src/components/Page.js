import React, { Component, PropTypes } from 'react';

export default class Page extends Component {
	static propTypes = {
		year: PropTypes.number.isRequired,
		photos: PropTypes.array.isRequired,
		setYear: PropTypes.func.isRequired
	};

	onYearBtnClick(e) {
		console.log(e.target);
		this.props.setYear(+e.target.textContent);
	}

	render() {
		const { year, photos } = this.props
		return <div className='ib page'>
			<p>
				<button className='btn' onClick={::this.onYearBtnClick}>2016</button>
				<button className='btn' onClick={::this.onYearBtnClick}>2015</button>
				<button className='btn' onClick={::this.onYearBtnClick}>2014</button>
			</p>
			<p>У тебя {photos.length} фото за {year} год</p>
		</div>;
	}
}