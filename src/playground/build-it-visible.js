
class VisiblilityToggle extends React.Component {
    constructor(props) {
        super(props)
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
        this.state = {
            visible: false
        }
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visible: !prevState.visible
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Visiblility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visible ? 'Hide details' : 'Show details'}
                </button>
                {this.state.visible && (
                    <div>
                        <p>Hey. THese are some details you can see</p>
                    </div>
                )}
            </div>
        )
    }
}

ReactDOM.render(<VisiblilityToggle />, document.getElementById('app'))

// let visiblility = false
// const toggleVisibility = () => {
//     visiblility = !visiblility
//     render()
// }

// const render = () => {
//     const jsx = (
//         <div>
//             <h1>Visiblility Toggle</h1>
//             <button onClick={toggleVisibility}>
//                 {visiblility ? 'Hide details' : 'Show details'}
//             </button>
//             {visiblility && (
//                 <div>
//                     <p>Hey. THese are some details you can see</p>
//                 </div>
//             )}
//         </div>
//     )
//     ReactDOM.render(jsx, document.getElementById('app'))
// }

// render()

