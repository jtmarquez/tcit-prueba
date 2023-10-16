import axios from 'axios';

const { API_URL } = process.env;

const API = axios.create({
    baseURL: API_URL,
    timeout: 30000,
});


API.interceptors.response.use(undefined, async (error) => {

    if (error?.response?.status === 403) {
        const message = 'You are not authorized';
        throw new Error(message)
    }

    if (error.code === 'ERR_CANCELED') return undefined;

    if (error.code === 'ERR_NETWORK') {
        const message = "We couldn't connect to the server"
        throw new Error(message);
    }

    const data = error?.response?.data;

    if (typeof data?.error === 'string') {
        throw new Error(data.error);
    }

    throw new Error('Unknown error happened');
});

const GET = async (path, query) => {
    const response = await API.get(path, { params: query });

    return response?.data;
};

const POST = async (path, data) => {
    const options = {
        timeout: data instanceof FormData ? 1000 * 60 * 5 : 1000 * 30,
    };

    const response = await API.post(path, data, options);

    return response?.data;
};

const DELETE = async (path) => {
    const response = await API.delete(path);

    return response?.data;
};

class ApiService {

    findAll(collectionName) {
        const path = `/${collectionName}`;

        return GET(path);
    }

    post(collectionName, data) {
        const path = `/${collectionName}`;

        return POST(path, data);
    }

    delete(collectionName, id) {
        const path = `/${collectionName}/${id}`;

        return DELETE(path);
    }
}

const apiService = new ApiService();

export default apiService;