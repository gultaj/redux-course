import React, { Component } from 'react';
import { connect } from 'react-redux';
import User from '../components/User';
import Page from '../components/Page';

@connect(state => ({ user: state.user, page: state.page }))
export default class App extends Component {
	render() {
		const { user, page } = this.props
		return <div>
			<User name={user.name} />
			<Page photos={page.photos} year={page.year} />
		</div>;
	}
}
