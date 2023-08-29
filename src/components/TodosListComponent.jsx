import React, { useEffect, useState } from "react";
import { getTodosByUser } from "../api/TodoApiService";
function TodosListComponent() {
  const[todos,setTodos]=useState([]);

  useEffect(()=>refreshTodos(),[]);

  function refreshTodos(){
    getTodosByUser("Admin")
    .then((response)=>{
      console.log(response.data)
      setTodos(response.data)})
    .catch((error)=>console.log(error))
    .finally(()=>console.log("clean"));
  }
  
  const items = todos.map((todo) => (
    <tr key={todo.id}>
      <td>{todo.id}</td>
      <td>{todo.description}</td>
      <td>{todo.done.toString()}</td>
      <td>{todo.targetDate}</td>
    </tr>
  ));
  return (
    <div className="container">
      <h1>Todos List</h1>
      TodosListComponent
      <table className="table">
        <thead>
          <tr>
            <td>Id</td>
            <td>Description</td>
            <td>Status</td>
            <td>Date</td>
          </tr>
        </thead>
        <tbody>{items}</tbody>
      </table>
    </div>
  );
}

export default TodosListComponent;
