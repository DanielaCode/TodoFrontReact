import apiClient from "./ApiClient.js";



export const basicAuth = (token) => apiClient.get(`/basicauth`,{headers:{Authorization:token}})
export const getTodosByUser = (username) => apiClient.get(`/users/${username}/todos`)
export const getTodoById= (username,id) => apiClient.get(`/users/${username}/todos/${id}`)
export const deleteTodoById= (username,id) => apiClient.delete(`/users/${username}/todos/${id}`)
export const updateTodoById= (username,id,todo) => apiClient.put(`/users/${username}/todos/${id}`,todo)
export const createTodo= (username,todo) => apiClient.post(`/users/${username}/todos`,todo)

