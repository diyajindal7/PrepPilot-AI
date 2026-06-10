import axios from "axios";

const api = axios.create({
baseURL: "https://preppilot-ai-e8yc.onrender.com/api",
});

export default api;