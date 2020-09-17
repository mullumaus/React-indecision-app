//stateless functional component
//Grab the add function from the add.js file in the utils folder
//Grab React from the react npm module

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.state = {
            options: []
        }
    }
    //componentDidMount() is invoked immediately after a component is mounted (inserted into the tree). 
    componentDidMount() {
        try {
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)
            if (options) {
                this.setState(() => ({ options }))
            }
        } catch (e) {

        }

    }
    //componentDidUpdate() is invoked immediately after updating occurs. This method is not called for the initial render.
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.options.length != this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
        }

    }
    //Unmounting,This method is called when a component is being removed from the DOM
    //we can do some clearup work here
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
    handleDeleteOptions() {
        this.setState(() => ({ options: [] }))
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => (option !== optionToRemove))
        }))
    }
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randomNum]
        alert(option)
    }

    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists'
        }
        this.setState((prevState) => ({ options: prevState.options.concat([option]) }))
    }
    //class refernece in template
    render() {
        const subtitle = 'Put your life in the hands of a computer'
        return (
            <div>
                <Header subtitle={subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
}

// IndecisionApp.defaultProps = {
//     options: []
// }
//Header /Action and Options has single render() function, they are stateless
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
}
//pass default value for Header
Header.defaultProps = {
    title: 'some default!'
}
// class Header extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         )
//     }
// }

const Action = (props) => {
    return (
        <div>
            <button onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What should I do?
            </button>
        </div>
    )
}


const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>RemoveALl</button>
            {props.options.length === 0 && <p>Please add an option to get started</p>}
            {
                props.options.map((option) => (
                    <Option
                        key={option}
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))
            }
        </div>
    )
}

const Option = (props) => {
    return (
        <div>
            Option: {props.optionText}
            <button
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText)
                }}>
                Remove
            </button>
        </div>
    )
}

class AddOption extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e) {
        e.preventDefault()
        const option = e.target.elements.option.value.trim()
        const error = this.props.handleAddOption(option)
        this.setState(() => ({ error }))
        if (!error) {
            e.target.elements.option.value = ''
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"></input>
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}


//User is stateless function
// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age:  {props.age}</p>
//         </div>
//     )
// }

//< when user lower case, we are assumed to create a html element, 
//when use upper case, it's going to look for a variable in scope and referernce in render call
ReactDOM.render(<IndecisionApp options={['one item', 'two item']} />, document.getElementById('app'))

