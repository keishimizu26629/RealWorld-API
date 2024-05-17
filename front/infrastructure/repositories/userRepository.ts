import axios from 'axios';

export const getUserData = async (token: string) => {
  try {
    const response = await axios.get('http://localhost:3000/api/v1/get_user', {
      headers: { Authorization: `Bearer ${token}`},
    });
    return response.data.user;
  } catch (error) {
    console.error('Error', error);
    throw error;
  }
}
