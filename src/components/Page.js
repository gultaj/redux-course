import React, { Component, PropTypes } from 'react';

export default class Page extends Component {
	static propTypes = {
		user: PropTypes.number,
		posts: PropTypes.array,
		users: PropTypes.array,
		fetching: PropTypes.bool,
		pageActions: PropTypes.object
	};

	componentWillReceiveProps() {
		// this.props.pageActions.getPosts(this.props.user);
	}

	onUserBtnClick(e) {
		this.props.pageActions.setUser(+e.target.dataset.id);
		this.props.pageActions.getPosts(e.target.dataset.id);
	}

	render() {
		const { user, posts, users, fetching } = this.props;
		return <div className='ib page'>
			<p>
				{users.map(u => 
					<button className='btn' key={u} data-id={u} onClick={::this.onUserBtnClick}>{u}</button>
				)}
			</p>
			<h3>{user} год</h3>
			{ fetching ? 
				<p>Загрузка...</p> :
				<p>Постов: {posts.length}.</p>
			}
		</div>;
	}
}