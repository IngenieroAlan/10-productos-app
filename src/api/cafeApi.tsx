import axios from "axios";

const baseURL = 'http://localhost:8080/api';

const cafeApi = axios.create({baseURL});

export default cafeApi;