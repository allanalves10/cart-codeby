import axios from 'axios';

export const ApiUp = axios.create({
    baseURL: 'http://localhost:3001/',
    timeout: 5000,
});

export const ApiDown = axios.create({
    baseURL: 'http://localhost:3002/',
    timeout: 5000,
});