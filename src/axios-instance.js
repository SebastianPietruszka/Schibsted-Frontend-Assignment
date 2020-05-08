import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:6010/articles/'
});

export default instance;