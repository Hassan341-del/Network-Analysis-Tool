const axios = require('axios');

const API_BASE_URL = 'https://example.com/api';
const instance = axios.create({ baseURL: API_BASE_URL });

module.exports = instance;
