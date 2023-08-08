import React from "react";

function TodosListComponent() {
  const todos = [
    {
      id:1,
      des:"study microservices",
      sts:"done",
      date: new Date(2023,1,6)
    },
    {
      id:2,
      des:"study microservices",
      sts:"done",
      date: new Date(2023,1,6)
    },
    {
      id:3,
      des:"study microservices",
      sts:"done",
      date: new Date(2023,1,6)
    }
  ]

  const items= todos.map((todo)=>(
    <tr key={todo.id}>
      <td>{todo.id}</td>
      <td>{todo.des}</td>
      <td>{todo.sts}</td>
      <td>{todo.date.toDateString()}</td>

    </tr>
 ))  
  return (
    <div className="TodosListComponent">
      <h1>Todos List</h1>
      TodosListComponent
      <table>
        <thead>
          <tr>
            <td>Id</td>
            <td>Description</td>
            <td>Status</td>
            <td>Date</td>
          </tr>
        </thead>
        <tbody>
          {items}
        </tbody>
      </table>
    </div>
  );
}

export default TodosListComponent;
