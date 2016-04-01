import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import User from '../components/User';
import Page from '../components/Page';
import * as pageActions from '../actions/PageActions';

@connect(
	state => ({ user: state.user, page: state.page }),
	dispatch => ({ pageActions: bindActionCreators(pageActions, dispatch) })
)
export default class App extends Component {
	render() {
		const { user, page } = this.props;
		return <div>
			<User name={user.name} />
			<Page posts={page.posts} 
				user={page.user} 
				users={page.users} 
				fetching={page.fetching} 
				pageActions={this.props.pageActions} />
		</div>;
	}
}
