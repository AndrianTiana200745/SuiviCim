const API_URL = "http://localhost:3000/api";

export const api = {
    login: async (credentials) => {
        const response = await fetch(`${API_URL}/users/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        });
        const data = await response.json();
        if (!response.ok){
            throw new Error(data.message || "Erreur serveur");
        }
        return data;
    },
    getCentre: async () => {
        const response = await fetch(`${API_URL}/centres`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        if (!response.ok){
            throw new Error(data.message || "Erreur serveur");
        }
        return data;
    },
    getUsers: async () => {
        const token = localStorage.getItem("token");
        const response = await fetch(`${API_URL}/users`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        const data = await response.json();
        if (!response.ok){
            throw new Error(data.message || "Erreur serveur");
        }
        return data;
    },
}