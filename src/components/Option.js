import React from 'react'


//stateless function
const Option = (props) => (
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

export default Option