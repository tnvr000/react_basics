window.onload = function() {
	target = document.getElementById('greeting')

	function Welcome(prop) {
		let element = React.createElement('h1', {
			children: `Hi, ${prop.name}`,
			key: prop.name
		});
		return element
	}

	function App() {
		return React.createElement(
			'div', {
				children: [
					Welcome({name: "Tarannum"}),
					Welcome({name: "Tanveer"}),
					Welcome({name: "Tahir"})
				],
				key: "1"
			}
		)
	}
	ReactDOM.render(App(), target)
}
var element