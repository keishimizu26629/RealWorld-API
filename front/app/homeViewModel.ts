import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '../contexts/ServiceContext';

export const useHomeViewModel = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const userService = useUser();

  const initialize = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const userData = await userService.getUserData(token);
        console.log(userData);
        if (userData) {
          setUser(userData);
          router.push('/article');
        } else {
          router.push('/login');
        }
      } catch (error) {
        console.error('Error', error);
        router.push('/login');
      }
    } else {
      router.push('/login');
    }
  };

  return {
    user,
    initialize,
  };
};
