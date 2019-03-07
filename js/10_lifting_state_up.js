'use strict'

const scaleName = {
	c: 'Celsius',
	f: 'Fahrenheit'
};

document.addEventListener("DOMContentLoaded", function() {
	const rootContainer = document.getElementById('root')
	const element = React.createElement(Calculator);

	ReactDOM.render(element, rootContainer);
})

function toCelsius(fahrenheit) {
	return ((fahrenheit - 32) * 5.0) / 9;
}

function toFahrenheit(celsius) {
	return ((celsius * 9.0) / 5) + 32;
}

function tryConvert(temperature, convert) {
	const input = parseFloat(temperature);
	if(Number.isNaN(input)) {
		return '';
	}
	const output = convert(input);
	const rounded = Math.round(output * 1000) / 1000;
	return rounded.toString();
}

function BoilingVerdict(props) {
	return(
		React.createElement('p',
			{
				key: 'boilingVerdict',
				id: 'boilingVerdict',
				className: 'verdict'
			},
			props.celsius >= 100 ? 'The water would boil' : 'The water would not boil'
		)
	);
}

class TemperatureInput extends React.Component {
	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(event) {
		this.props.onTemperatureChange(event.target.value);
	}

	render() {
		const temperature = this.props.temperature;
		const scale = this.props.scale;
		return(React.createElement('fieldset',
			{
				key: 'fieldset',
				id: 'fieldset',
				className: 'fieldset'
			},
			React.createElement('legend', 
				{
					key: 'legend',
					id: 'legend',
					className: 'legend'
				},
				`Enter temperature in ${scaleName[scale]}:`
			),
			React.createElement('input',
				{
					key: 'temperature',
					id: 'temperature',
					name: 'temperature',
					className: 'textbox',
					value: temperature,
					onChange: this.handleChange
				},
			)
		))
	}
}

class Calculator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			temperature: '',
			scale: 'c'
		};

		this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
		this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
	}

	handleCelsiusChange(temperature) {
		this.setState({scale: 'c', temperature: temperature});
	}

	handleFahrenheitChange(temperature) {
		this.setState({scale: 'f', temperature: temperature});
	}

	render() {
		const temperature = this.state.temperature;
		const scale = this.state.scale;
		const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
		const fahrenheit = scale == 'c' ? tryConvert(temperature, toFahrenheit) : temperature

		return(React.createElement('div',
			{
				key: 'calculator',
				id: 'calculator',
				className: 'calculator',
			},
			React.createElement(TemperatureInput, {
				scale: 'c',
				temperature: celsius,
				onTemperatureChange: this.handleCelsiusChange }
			),
			React.createElement(TemperatureInput, {
				scale: 'f',
				temperature: fahrenheit,
				onTemperatureChange: this.handleFahrenheitChange }
			),
			BoilingVerdict({celsius: parseFloat(celsius)})
		))
	}
}