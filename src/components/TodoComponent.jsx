import React from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import LogingComponent from './LogingComponent'
import WelcomeComponent from './WelcomeComponent'
import styles from './TodoComponent.css'
import ErrorComponent from './ErrorComponent';
import TodosListComponent from './TodosListComponent';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
function TodoComponent() {
  return (
    <div className='TodoComponent'>
        <HeaderComponent/>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LogingComponent/>}/>
            <Route path='/login' element={<LogingComponent/>}/>
            <Route path='/welcome/:username' element={<WelcomeComponent/>}/>
            <Route path='/todos' element={<TodosListComponent/>}/>
            <Route path='*' element={<ErrorComponent/>}/>
          </Routes>
        </BrowserRouter>
        <FooterComponent/>
    </div>
  )
}

export default TodoComponent