import { AuthRepository } from '../../types/authTypes';

export const mockAuthRepository: AuthRepository = {
  login: async (email: string, password: string) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          token: 'mock-token',
        });
      }, 1000);
    });
  }
};
