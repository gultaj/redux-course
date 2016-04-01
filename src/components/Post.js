import React, { Component, PropTypes } from 'react';

export default class Page extends Component {
	static propTypes = {
		text: PropTypes.string
	};

	render() {
		const { text } = this.props;
		return <p className='post'>{text}</p>;
	}
}