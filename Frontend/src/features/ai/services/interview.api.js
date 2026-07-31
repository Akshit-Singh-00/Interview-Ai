import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000/api",
    withCredentials: true,
});

export const generateInterview = async (data) => {
    const response = await api.post(
        "/interview/generate",
        data
    );

    return response.data;
};

export const getInterviewHistory = async () => {
    const response = await api.get(
        "/interview"
    );

    return response.data;
};

export const getInterview = async (id) => {
    const response = await api.get(
        `/interview/${id}`
    );

    return response.data;
};

export const deleteInterview = async (id) => {
    const response = await api.delete(
        `/interview/${id}`
    );

    return response.data;
};