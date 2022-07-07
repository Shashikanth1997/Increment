import React from 'react'

function Greet(props) { 
    const {name,heroname}= props
  return (
    <div>
        <h1>my name is {name} and my heroname is {heroname}</h1>
    </div>
  )
}

export default Greet