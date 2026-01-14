export const API_BASE_URL = "http://localhost:5000/api";

export const fetchFromBackend = async (endpoint: string, options: RequestInit = {}) => {
    const res = await fetch(`${API_BASE_URL}${endpoint}`, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            ...options.headers,
        },
    });
    return res.json();
};
