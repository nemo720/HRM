import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/personal/listBirthDay';

export const listBirthDay = () => axios.get(REST_API_BASE_URL);
