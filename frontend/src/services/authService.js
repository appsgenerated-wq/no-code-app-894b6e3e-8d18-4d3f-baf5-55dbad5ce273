import apiService from './apiService';

const authService = {
  login(email, password) {
    return apiService.post('/users/login', { email, password });
  },

  register(userData) {
    return apiService.post('/users/register', userData);
  },

  getProfile() {
    return apiService.get('/users/profile');
  },
};

export default authService;
