import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogingComponent from "./LogingComponent";
import WelcomeComponent from "./WelcomeComponent";
import styles from "./TodoComponent.css";
import ErrorComponent from "./ErrorComponent";
import TodosListComponent from "./TodosListComponent";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import AuthProvider from '../providers/AuthContext';
function TodoComponent() {
  return (
    <div className="TodoComponent">
      <AuthProvider>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<LogingComponent />} />
          <Route path="/login" element={<LogingComponent />} />
          <Route path="/welcome/:username" element={<WelcomeComponent />} />
          <Route path="/todos" element={<TodosListComponent />} />
          <Route path="*" element={<ErrorComponent />} />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default TodoComponent;
