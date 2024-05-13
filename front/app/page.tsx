'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function Home() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const response = await axios.get('http://localhost:3000/api/v1/get_user', {
            headers: { Authorization: `Bearer ${token}` },
          });
          if (response.status === 200) {
            setUser(response.data.user);
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

    fetchUserData();
  }, [router]);

  if (!user) {
    return null;
  }

  return <></>;
}
