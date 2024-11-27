import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api';

const api = {
    // Stock related APIs
    getStocks: () => axios.get(`${BASE_URL}/stocks`),
    getStockPrice: (symbol) => axios.get(`${BASE_URL}/stocks/${symbol}/realtime`),

    // Portfolio related APIs
    getPortfolio: (username) => axios.get(`${BASE_URL}/portfolio/${username}`),

    // Trading related APIs
    executeTrade: (tradeData) => axios.get(`${BASE_URL}/trades/execute`, tradeData),
};

export default api;