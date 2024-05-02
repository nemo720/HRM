import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/personal/listAnniversary';

export const listAnniversary = () => axios.get(REST_API_BASE_URL);
