import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/personal/list';
const REST_API_UPDATE_URL = 'http://localhost:8080/api/personal/update/';
export const listEmployees = () => axios.get(REST_API_BASE_URL);
export const updateEmployee = (id, employee) => axios.put(REST_API_UPDATE_URL + id, employee)
    .catch(error => {
    console.error('Error updating employee:', error);
});