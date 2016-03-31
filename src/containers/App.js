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
		const { setYear } = this.props.pageActions;
		return <div>
			<User name={user.name} />
			<Page photos={page.photos} year={page.year} setYear={setYear} />
		</div>;
	}
}
