import React, { useEffect, useState } from "react";
import { getTodosByUser,deleteTodoById } from "../api/TodoApiService";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../providers/AuthContext";
function TodosListComponent() {
  const[todos,setTodos]=useState([]);
  const[message,setMessage]=useState(null);
  const navigate = useNavigate();
  const auth = useAuth();
  useEffect(()=>refreshTodos(),[]);

  function refreshTodos(){
    getTodosByUser(auth.username)
    .then(response=>setTodos(response.data))
    .catch(error=>console.log(error))
  }

  function deleteTodo(id){
    deleteTodoById(auth.username,id)
    .then(response=>{
      setMessage(`Deleted todo with id = ${id}`)
      refreshTodos()
    })
    .catch(error=>console.log(error))
  }

  const items = todos.map((todo) => (
    <tr key={todo.id}>
      <td>{todo.description}</td>
      <td>{todo.done.toString()}</td>
      <td>{todo.targetDate}</td>
      <td><button className="btn btn-warning" onClick={() => deleteTodo(todo.id)}>Delete</button></td>
      <td><button className="btn btn-success" onClick={() =>navigate(`/details/${todo.id}`)}>Update</button></td>
    </tr>
  ));

  return (
    <div className="container">
      <h1>Todos List</h1>
      {message && <div className="alert alert-warning">{message}</div>}
      <table className="table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Status</th>
            <th>Date</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>{items}</tbody>
      </table>
      <button className="btn btn-success m-5" onClick={() =>navigate(`/details/-1`)}>Add Todo</button>
    </div>
  );
}

export default TodosListComponent;
