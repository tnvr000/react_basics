'use strict'
window.onload = function() {
	const domContainer = document.getElementById('root')
	const element = React.createElement(Toggle)
	ReactDOM.render(element, domContainer)
}

class Toggle extends React.Component {
	constructor(props) {
		super(props);
		this.state = {isToggleOn: true};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState(state=>({isToggleOn: !state.isToggleOn}));
	}

	render() {
		return (
			React.createElement('button',
				{
					key: 'btn_toggle',
					id: 'btnToggle',
					className: 'button',
					onClick: this.handleClick
				},
				this.state.isToggleOn ? 'ON' : 'OFF'
			)
		);
	}
}