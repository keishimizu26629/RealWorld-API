import axios from 'axios';
import { AuthRepository } from '../../types/authTypes';

export const authRepository: AuthRepository = {
  login: async (email: string, password: string) => {
    const response = await axios.post('http://localhost:3000/api/v1/login', {
      email,
      password,
    });
    return response.data;
  }
}
