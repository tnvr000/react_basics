"use strict"
window.onload = function() {
	const rootContainer = document.getElementById('greeting')

	function Welcome(props) {
		let element = React.createElement('h1', 
			{
				key: props.name
			},
			`Hi ${props.name}`
		);
		return element
	}

	function App() {
		return React.createElement('div', 
			{
				key: "1"
			},
			Welcome({name: 'Tarannum'}),
			Welcome({name: 'Tanveer'}),
			Welcome({name: 'Tahir'})
		);
	}
	ReactDOM.render(App(), rootContainer)
}
