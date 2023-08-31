import axios from "axios";
// create an instance of axios to configure this service
const apiClient=axios.create(
    {
        baseURL:"http://localhost:8081"
    }
);

export const getTodosByUser = (username) => apiClient.get(`/users/${username}/todos`)
export const getTodoById= (username,id) => apiClient.get(`/users/${username}/todos/${id}`)
export const deleteTodoById= (username,id) => apiClient.delete(`/users/${username}/todos/${id}`)
export const updateTodoById= (username,id,todo) => apiClient.put(`/users/${username}/todos/${id}`,todo)
export const createTodo= (username,todo) => apiClient.post(`/users/${username}/todos`,todo)

