import axios, { CreateAxiosDefaults } from 'axios';

const config: CreateAxiosDefaults = {
    baseURL:
        import.meta.env.VITE_API_URL || 'http://localhost:8000/products-be',
};

const apiClient = axios.create(config);

apiClient.interceptors.response.use(
    (response) => {
        console.log('Response: ', response);
        return response;
    },
    (error) => {
        console.log('Error: ', error);
        return error;
    },
);

export { apiClient };
