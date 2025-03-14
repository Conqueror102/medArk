import React from 'react'

const Button = ({text, className}) => {
  return (
    <div className={`px-4 py-2  ${className} font-semibold rounded-lg cursor-pointer`}>
        <p>{text}</p>
    </div>
  )
}

export default Button