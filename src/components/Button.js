import PropTypes from 'prop-types'


import React from 'react'

const Button = ({color,text,onclick}) => {
    
    return (
        <button onClick={onclick} style={{backgroundColor:color}} className='btn'>{text}</button>
    )
}

Button.defaultProps={
    color:'steelgreen',
    text:'Hello'
}

Button.prototypes={
    text:PropTypes.string,
    color:PropTypes.string,
    onclick:PropTypes.func
}

export default Button
