import React from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import LogingComponent from './LogingComponent'
import WelcomeComponent from './WelcomeComponent'
import styles from './TodoComponent.css'
function TodoComponent() {
  return (
    <div className='TodoComponent'>
        TodoComponent
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LogingComponent/>}/>
            <Route path='/login' element={<LogingComponent/>}/>
            <Route path='/welcome' element={<WelcomeComponent/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default TodoComponent