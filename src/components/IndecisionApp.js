import React from 'react'
import AddOption from './AddOption'
import Header from './Header'
import Action from './Action'
import Options from './Options'
import OptionModal from './OptionModal'

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    }
    // constructor(props) {
    //     super(props)
    //     this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    //     this.handlePick = this.handlePick.bind(this)
    //     this.handleAddOption = this.handleAddOption.bind(this)
    //     this.handleDeleteOption = this.handleDeleteOption.bind(this)
    // }
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
    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }))
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => (option !== optionToRemove))
        }))
    }
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randomNum]
        //use setState to seet selectedOption
        this.setState(() => ({
            selectedOption: option
        }))
    }

    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value to add item'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists'
        }
        this.setState((prevState) => ({ options: prevState.options.concat([option]) }))
    }

    handleClearSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined }))
    }
    //class refernece in template
    render() {
        const subtitle = 'Put your life in the hands of a computer'
        return (
            <div>
                <Header subtitle={subtitle} />
                <div className="container">
                    <Action
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption
                            handleAddOption={this.handleAddOption}
                        />
                    </div>
                </div>

                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        )
    }
}

// IndecisionApp.defaultProps = {
//     options: []
// }
