"use strict"
window.onload = function () {
	const element = Comment(
		{
			author: {
				name: 'Tarannum',
				avatarURL: 'https://tnvr000.github.io/html_basics/img/github_pages_icon.jpg'
			},
			text: 'Hi there. I\'m learning Ract here.',
			date: new Date().toLocaleTimeString()
		}
	);

	ReactDOM.render(element, document.getElementById('root'))
}
function Comment(props) {
	return (
		React.createElement('div', 
			{
				className: 'Comment'
			},
			React.createElement('div',
				{
					className: 'UserInfo',
					key: 'UserInfo'
				},
				UserInfo({user:props.author})
			),
			React.createElement('div',
				{
					className: 'comment-text',
					key: 'comment-text'
				},
				props.text
			),
			React.createElement('div',
				{
					className: 'comment-date',
					key: 'comment-date'
				},
				props.date
			)
		)
	);
}

function Avatar(props) {
	return (React.createElement('img',
		{
			key: 'avatar',
			className: 'avatar',
			style: {
				width: '150px'
			},
			src: props.user.avatarURL,
			alt: props.user.name
		}
	));
}

function UserInfo(props) {
	return (React.createElement('div', 
		{
			key: 'UserInfo',
			className: 'user-info',
		},
		Avatar({user: props.user})),
		React.createElement('div',
			{
				key:'user-info-name',
				className: 'user-info-name'
			},
			props.user.name
		)
	);
}