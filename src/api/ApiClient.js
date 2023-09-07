import axios from "axios";
// create an instance of axios to configure this service
const apiClient = axios.create(
    {
        baseURL:"http://localhost:8081"
    }
);

export default apiClient;
