import { getUserData } from '../../infrastructure/repositories/userRepository';

export const fetchUserData = async (token: string) => {
  if (token) {
    try {
      const user = await getUserData(token);
      return user;
    } catch (error) {
      throw error;
    }
  }
  return null;
}
