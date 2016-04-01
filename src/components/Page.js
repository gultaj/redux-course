import React, { Component, PropTypes } from 'react';
import Post from './Post';

export default class Page extends Component {
	static propTypes = {
		user: PropTypes.number,
		posts: PropTypes.array,
		users: PropTypes.array,
		fetching: PropTypes.bool,
		pageActions: PropTypes.object
	};

	componentWillMount() {
		this.props.pageActions.getUsers();
		this.props.pageActions.getPosts(this.props.user);
	}

	onUserBtnClick(e) {
		// this.props.pageActions.setUser(+e.target.dataset.id);
		this.props.pageActions.getPosts(+e.target.dataset.id);
	}

	render() {
		const { user, posts, users, fetching } = this.props;
		const nickname = users.filter(us => us.id == user)[0].nickname;
		return <div className='ib page'>
			<p>
				{users.map(u => 
					<button className='btn' key={u.id} data-id={u.id}  onClick={::this.onUserBtnClick}>{u.nickname}</button>
				)}
			</p>
			<h3>Пользователь {nickname}</h3>
			{ fetching ? 
				<p>Загрузка...</p> :
				<p>Постов: {posts.length}.</p>
			}
			{posts.map(ps => <Post key={ps.id} text={ps.text} />)}
		</div>;
	}
}