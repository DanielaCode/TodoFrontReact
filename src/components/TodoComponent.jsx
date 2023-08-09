import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LogingComponent from "./LogingComponent";
import WelcomeComponent from "./WelcomeComponent";
import styles from "./TodoComponent.css";
import ErrorComponent from "./ErrorComponent";
import TodosListComponent from "./TodosListComponent";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import AuthProvider, { useAuth } from '../providers/AuthContext';

function AuthenticatedRoute({children}){
  const isAuth = useAuth().isAuth
  if (isAuth)
    return children
  return <Navigate to="/"/>
}

function TodoComponent() {
  return (
    <div className="TodoComponent">
      <AuthProvider>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<LogingComponent />} />
          <Route path="/login" element={<LogingComponent />} />
          <Route path="/welcome/:username" element={<AuthenticatedRoute><WelcomeComponent /></AuthenticatedRoute>} />
          <Route path="/todos" element={<AuthenticatedRoute><TodosListComponent /></AuthenticatedRoute>} />
          <Route path="*" element={<ErrorComponent />} />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default TodoComponent;
