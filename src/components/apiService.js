import axios from 'axios';

const API_URL = 'http://localhost:8000/api/'; // Change this URL according to your Django API URL

const apiService = {
    getBooks: async () => {
        const response = await axios.get(API_URL + 'books/');
        return response.data;
    },
    getBook: async (id) => {
        const response = await axios.get(API_URL + 'books/' + id + '/');
        return response.data;
    },
    createBook: async (data) => {
        const response = await axios.post(API_URL + 'books/', data);
        return response.data;
    },
    updateBook: async (id, data) => {
        const response = await axios.put(API_URL + 'books/' + id + '/', data);
        return response.data;
    },
    deleteBook: async (id) => {
        await axios.delete(API_URL + 'books/' + id + '/');
    },
};

export default apiService;
