import React from 'react'
import LogingComponent from './LogingComponent'
import WelcomeComponent from './WelcomeComponent'

function TodoComponent() {
  return (
    <div className='TodoComponent'>
        TodoComponent
        <LogingComponent/>
        <WelcomeComponent/>
    </div>
  )
}

export default TodoComponent