import axios from "axios";

export const HTTPClient = axios.create({
    baseURL: "https://localhost:7006",
    headers: {
        "Access-control-Allow-Origin": "*",
        "Access-control-Allow-Headers": "Authorization",
        "Access-control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
        "Content-Type": "application/json;charset-UTF-8",

    }
})