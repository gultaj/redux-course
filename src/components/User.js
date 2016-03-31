import React, {Component, PropTypes} from 'react';

export default class User extends Component {
	static propTypes = {
		name: PropTypes.string.isRequired
	};

	render() {
		const { name } = this.props;
		return <div className='ib user'>
			<p>Привет, {name}!</p>
		</div>
	}
}