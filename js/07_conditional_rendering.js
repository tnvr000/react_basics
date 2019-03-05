var greetingContainer
window.onload = function() {
	buttonContainer = document.getElementById('buttonContainer')
	greetingContainer = document.getElementById('greetingContainer')

	// ReactDOM.render(Greeting({isLoggedIn: false}), greetingContainer)
	element = React.createElement(LoginControl)
	ReactDOM.render(element, buttonContainer)
}

function UserGreeting(props) {
	return (
		React.createElement(
			'h1',
			{
				key: 'user_greeting',
				id: 'greeting',
				className: 'greeting'
			},
			'Welcome Back'
		)
	);
}

function GuestGreeting(props) {
	return (
		React.createElement(
			'h1',
			{
				key: 'guest_greeting',
				id: 'greeting',
				className: 'greeting'
			},
			'Please Login First'
		)
	);
}

function LoginButton(props) {
	return (
		React.createElement(
			'button',
			{
				key: 'button',
				id: 'logButton',
				className: 'button',
				onClick: props.onClick
			},
			'Login'
		)
	);
}

function LogoutButton(props) {
	return (
		React.createElement(
			'button',
			{
				key: 'button',
				id: 'logButton',
				class_name: 'button',
				onClick: props.onClick
			},
			'Logout'
		)
	);
}

function Greeting(props) {
	const isLoggedIn = props.isLoggedIn;
	if(isLoggedIn) {
		return UserGreeting();
	}
	return GuestGreeting();
}

class LoginControl extends React.Component {
	constructor(props) {
		super(props);
		this.state = {isLoggedIn: false};
		this.handleLoginClick = this.handleLoginClick.bind(this);
		this.handleLogoutClick = this.handleLogoutClick.bind(this);
	}

	handleLoginClick() {
		this.setState({isLoggedIn: true});
	}

	handleLogoutClick() {
		this.setState({isLoggedIn: false});
	}

	componentDidMount() {
		const greetingContainer = document.getElementById('greetingContainer')
		ReactDOM.render(Greeting({isLoggedIn: this.state.isLoggedIn}), greetingContainer)
	}

	componentDidUpdate() {
		const greetingContainer = document.getElementById('greetingContainer')
		ReactDOM.render(Greeting({isLoggedIn: this.state.isLoggedIn}), greetingContainer)
	}

	render() {
		const isLoggedIn = this.state.isLoggedIn;
		let button
		if (isLoggedIn) {
			button = LogoutButton({onClick: this.handleLogoutClick})
		} else {
			button = LoginButton({onClick: this.handleLoginClick})
		}
		return isLoggedIn ? 
			LogoutButton({onClick: this.handleLogoutClick}) : 
			LoginButton({onClick: this.handleLoginClick});
	}
}