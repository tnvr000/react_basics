"use strict"
window.onload = function() {
	const clockContainer = document.getElementById('clock')
	const tick = function() {
		const element = React.createElement('span', null, new Date().toLocaleTimeString())
		ReactDOM.render(element, clockContainer)
	}
	
	setInterval(tick, 1000)
}