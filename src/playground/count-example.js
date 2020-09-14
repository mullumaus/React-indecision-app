
class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.handleIncrement = this.handleIncrement.bind(this)
        this.handleMinus = this.handleMinus.bind(this)
        this.handleReset = this.handleReset.bind(this)
        this.state = {
            count: 0, //set the default state value
            name: 'Julie'
        }
    }
    //setState is async
    handleIncrement() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })

    }
    handleMinus() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })
    }
    handleReset() {
        this.setState(() => {
            return {
                count: 0
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleIncrement}>+1</button>
                <button onClick={this.handleMinus}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'))

// let count = 0
// const addone = () => {
//     count++
//     renderCounterApp()
// }
// const minusOne = () => {
//     count--
//     renderCounterApp()
// }
// const reset = () => {
//     count = 0
//     renderCounterApp()
// }


// const appRoot = document.getElementById('app');

// //ReactDOM.render(template, appRoot);


// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count:{count}</h1>
//             <button onClick={addone} className="button">+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     )
//     ReactDOM.render(templateTwo, appRoot);
// }

// renderCounterApp()