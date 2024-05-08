import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/personal';

export const listEmployees = () => axios.get(REST_API_BASE_URL + '/list');

export const getEmployee = async (idEmployee) => await axios.get(REST_API_BASE_URL + '/detail/' + idEmployee);

export const createEmployee = async (employee) => axios.post(REST_API_BASE_URL + '/create', employee);

export const updateEmployee = async (id, employee) => axios.put(REST_API_BASE_URL + '/update/', employee)
    .catch(error => {
    console.error('Error updating employee:', error);
});

export const deleteEmployee = async (idEmployee) => axios.delete(REST_API_BASE_URL + '/delete/' + idEmployee);