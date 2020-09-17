import React from 'react'

//Header /Action and Options has single render() function, they are stateless
const Header = (props) => (
    <div className="header">
        <div className="container">
            <h1 className='header__title'>{props.title}</h1>
            {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
        </div>
    </div>
)

//pass default value for Header
Header.defaultProps = {
    title: 'Task Manager'
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

export default Header
