'use strict'
const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];
document.addEventListener("DOMContentLoaded", function() {
	const rootContainer = document.getElementById('root');
	const element = React.createElement(FilterableProductTable, {
		products: PRODUCTS
	})

	ReactDOM.render(element, rootContainer);
});

class ProductCategoryRow extends React.Component {
	render() {
		const category = this.props.category;
		return (React.createElement('tr', null,
			React.createElement('th', {colSpan: '2'}, 
				category
			)
		));
	}
}

class ProductRow extends React.Component {
	render() {
		const product = this.props.product;
		const name = product.stocked ? product.name : React.createElement('span',
			{
				style: {
					color: 'red'
				}
			},
			product.name
		)
		return(
			React.createElement('tr',
				null,
				React.createElement('td',
					null,
					name
				),
				React.createElement('td',
					null,
					product.price
				)
			)
		);
	}
}

class ProductTable extends React.Component {
	render() {
		const filterText = this.props.filterText;
		const inStockOnly = this.props.inStockOnly;
		let rows = [];
		let lastCatgory = null;

		this.props.products.forEach((product)=>{
			if(product.name.indexOf(filterText) === -1) {
				return;
			}
			if(inStockOnly && !product.stocked) {
				return;
			}
			if (product.category !== lastCatgory) {
				rows.push(React.createElement(ProductCategoryRow,
					{
						category: product.category,
						key: product.category
					}
				));
			}
			rows.push(React.createElement(ProductRow,
				{
					product: product,
					key: product.name
				}
			));
			lastCatgory = product.category
		});

		return(React.createElement('table',
			null,
			React.createElement('thead',
				null,
				React.createElement('tr',
					null,
					React.createElement('th',
						null,
						'Name'
					),
					React.createElement('th',
						null,
						'Price'
					)
				)
			),
			React.createElement('tbody',
				null,
				rows
			)
		));
	}
}

class SearchBar extends React.Component {
	constructor(props) {
		super(props);

		this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
		this.handleInStockChange = this.handleInStockChange.bind(this)
	}

	handleFilterTextChange(event) {
		this.props.onFilterTextChange(event.target.value)
	}

	handleInStockChange(event) {
		this.props.onInStockChange(event.target.checked)
	}

	render() {
		const filterText = this.props.filterText;
		const inStockOnly = this.props.inStockOnly;

		return(React.createElement('form',
			null,
			React.createElement('input',
				{
					type: 'text',
					placeholder: 'Search...',
					value: filterText,
					onChange: this.handleFilterTextChange
				}
			),
			React.createElement('p',
				null,
				React.createElement('input',
					{
						type: 'checkbox',
						checked: inStockOnly,
						onChange: this.handleInStockChange
					}
				),
				' Only show products in stock'
			)
		))
	}
}

class FilterableProductTable extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			filterText: '',
			inStockOnly: false
		};

		this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
		this.handleInStockChange = this.handleInStockChange.bind(this)
	}

	handleFilterTextChange(filterText) {
		this.setState({filterText: filterText})
	}

	handleInStockChange(inStockOnly) {
		this.setState({inStockOnly: inStockOnly})
	}

	render() {
		return(React.createElement('div',
			null,
			React.createElement(SearchBar, 
				{
					filterText: this.state.filterText,
					inStockOnly: this.state.inStockOnly,
					onFilterTextChange: this.handleFilterTextChange,
					onInStockChange: this.handleInStockChange
				}
			),
			React.createElement(ProductTable, 
				{
					products: this.props.products,
					filterText: this.state.filterText,
					inStockOnly: this.state.inStockOnly
				}
			)
		));
	}
}

// function ProductRow(props) {
// 	return (React.createElement('div',
// 		{
// 			key: props.name,
// 			className: 'product-row',
// 		},
// 		React.createElement('div',
// 			{
// 				key: props.name + 'Name',
// 				className: 'product-row-name'
// 			},
// 			props.name
// 		),
// 		React.createElement('div',
// 			{
// 				key: props.name + 'Price',
// 				className: 'product-row-price'
// 			},
// 			`$${props.price}`
// 		)
// 	));
// }

// function ProductCategoryRow(props) {
// 	let children = [props.name]
// 	props.products.map((product)=>{
// 		children.push(ProductRow(product))
// 	});

// 	return (React.createElement('div',
// 		{
// 			key: props.name,
// 			className: 'product-categary-row'
// 		},
// 		children
// 	));
// }

// function ProductTable(props) {
// 	return (React.createElement('div',
// 		{
// 			key: 'productTable',
// 			className: 'table'
// 		},
// 		props.categories.map((category)=>{
// 			return ProductCategoryRow(category);
// 		})
// 	));
// }

// function SearchBar(props) {
// 	return(React.createElement('div',
// 		{
// 			key: 'searchBar',
// 			className: 'search-bar'
// 		},
// 		React.createElement('input',
// 			{
// 				key: 'search',
// 				name: 'search',
// 				className: 'textbox',
// 				type: 'text',
// 				placeholder: 'Search'
// 			}
// 		),
// 		React.createElement('label',
// 			{
// 				key: 'label',
// 				className: 'label',
// 			},
// 			React.createElement('input',
// 				{
// 					key: 'stocked',
// 					name: 'isStocked',
// 					type: 'checkbox'
// 				}
// 			),
// 			'Only show products in stock'
// 		)
// 	))
// }

// function FilterableProductTable(props) {
// 	return(React.createElement('div',
// 		{
// 			key: 'filterableProductTable',
// 			id: 'filterableProductTable',
// 			className: 'table-container'
// 		},
// 		SearchBar(),

// 		ProductTable(props)
// 	))
// }