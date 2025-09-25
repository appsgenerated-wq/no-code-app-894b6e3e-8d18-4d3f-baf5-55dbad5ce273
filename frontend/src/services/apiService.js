import config from '../constants';

const apiService = {
  authToken: null,

  setAuthToken(token) {
    this.authToken = token;
  },

  async request(endpoint, options = {}) {
    const url = `${config.API_BASE_URL}/${config.APP_ID}${endpoint}`;
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    if (this.authToken) {
      headers['Authorization'] = `Bearer ${this.authToken}`;
    }

    const response = await fetch(url, {
      ...options,
      headers,
    });

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'An API error occurred');
      error.status = response.status;
      error.data = responseData;
      throw error;
    }

    return responseData;
  },

  get(endpoint, params) {
    const url = params ? `${endpoint}?${new URLSearchParams(params)}` : endpoint;
    return this.request(url);
  },

  post(endpoint, data) {
    return this.request(endpoint, { method: 'POST', body: JSON.stringify(data) });
  },

  put(endpoint, data) {
    return this.request(endpoint, { method: 'PUT', body: JSON.stringify(data) });
  },

  delete(endpoint) {
    return this.request(endpoint, { method: 'DELETE' });
  },
};

export default apiService;
