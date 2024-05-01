import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/employee/listVacationDay';

export const listVacationDay = () => axios.get(REST_API_BASE_URL);
