window.onload = function() {
	function tick() {
		element = React.createElement(Clock)
		ReactDOM.render(element, document.getElementById('root'))
	}
	tick()
}
var element
class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {date: new Date()};
	}

	componentDidMount() {
		this.timerID = setInterval(()=>this.tick(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
		let date = new Date();
		this.setState({date: date});
	}

	render() {
		return (
			React.createElement(
				'div',
				{
					key: 'time',
					className: 'clock'
				},
				this.state.date.toLocaleTimeString()
			)
		)
	}
}