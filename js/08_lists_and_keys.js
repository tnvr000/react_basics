"use strict";
window.onload = function() {
	const rootContainer = document.getElementById('root');
	const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	ReactDOM.render(NumberList({numbers: numbers}), rootContainer)
}

function NumberList(props) {
	const numbers = props.numbers;
	const listItems = numbers.map((number)=>{
		return React.createElement('li',
			{
				key: number.toString()
			},
			number
		);
	})
	return React.createElement('ul', null, listItems)
}