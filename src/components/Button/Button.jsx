import React from 'react'
import './Button.css'

function Button({onPress, children}) {
    return (
        <div onClick={onPress} className='btn'>
            {children}
        </div>
    )
}

export default Button
