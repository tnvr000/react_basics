window.onload = function() {
	clockContainer = document.getElementById('clock')
	const tick = function() {
		element = React.createElement('span', {children: new Date().toLocaleTimeString()})
		ReactDOM.render(element, clockContainer)
	}
	
	setInterval(tick, 1000)
}