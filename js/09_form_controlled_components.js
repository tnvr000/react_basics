"use strict"
document.addEventListener('DOMContentLoaded', function() {
	const rootContainer = document.getElementById('root');
	const element = React.createElement(NameForm);

	ReactDOM.render(element, rootContainer)
})

class NameForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			essay: 'Essay goes here',
			wordLimit: 500
		};

		this.handleChangeInTextbox = this.handleChangeInTextbox.bind(this);
		this.handleChangeInWordLimit = this.handleChangeInWordLimit.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChangeInTextbox(event) {
		const value = event.target.value;
		const name = event.target.name;

		this.setState({[name]: value});
	}

	handleChangeInWordLimit(event) {
		this.setState({wordLimit: event.target.value})
	}

	handleSubmit(event) {
		event.preventDefault();
		console.log(this.state.name + " submitted this essay of maximum " + this.state.
			wordLimit + " words \n" + this.state.essay);
	}

	render() {
		return (
			React.createElement('form',
				{
					key: 'form',
					id: 'form',
					className: 'form',
					onSubmit: this.handleSubmit
				},
				React.createElement('div',
					{
						key: 'nameContainer',
						id: 'nameContainer',
						className: 'element-container',
					},
					React.createElement('label', 
						{
							key: 'labelName',
							id: 'labelName',
							className: 'label'
						},
						'Name'
					),
					React.createElement('input',
						{
							key: 'textName',
							id: 'textName',
							name: 'name',
							className: 'textbox',
							type: 'text',
							value: this.state.name,
							onChange: this.handleChangeInTextbox
						}
					)
				),
				React.createElement('div',
					{
						key: 'essayContainer',
						id: 'essayContainer',
						className: 'element-container'
					},
					React.createElement('label',
						{
							key: 'labelEssay',
							id: 'labelEssay',
							className: 'label',
						},
						'Essay: '
					),
					React.createElement('textarea',
						{
							key: 'textEssay',
							id: 'textEssay',
							name: 'essay',
							className: 'text',
							onChange: this.handleChangeInTextbox,
							value: this.state.essay
						}
					)
				),
				React.createElement('div',
					{
						key: 'wordLimitConatiner',
						id: 'wordLimitConatiner',
						className: 'element-container'
					},
					React.createElement('label',
						{
							key: 'labelWordLimit',
							id: 'labelWordLimit',
							className: 'label'
						},
						'Word Limit'
					),
					React.createElement('select',
						{
							key: 'selectWordLimit',
							id: 'selectWordLimit',
							className: 'select',
							value: this.state.wordLimit,
							onChange: this.handleChangeInWordLimit
						},
						React.createElement('option',
							{
								key: 'option250',
								id: 'option250',
								className: 'option',
								value: '250'
							},
							250
						),
						React.createElement('option',
							{
								key: 'option500',
								id: 'option500',
								className: 'option',
								value: 500
							},
							500
						),
						React.createElement('option',
							{
								key: 'option1000',
								id: 'option1000',
								className: 'option',
								value: 1000
							},
							1000
						),
						React.createElement('option',
							{
								key: 'option1500',
								id: 'option1500',
								className: 'option',
								value: 1500
							},
							1500
						)
					)
				),
				React.createElement('div',
					{
						key: 'buttonSubmitContainer',
						id: 'buttonSubmitContainer',
						className: 'element-container'
					},
					React.createElement('input',
						{
							key: 'submit',
							id: 'btnSubmit',
							className: 'button submit',
							type: 'submit',
							value: 'Submit'
						}
					)
				)
			)
		);
	}
}