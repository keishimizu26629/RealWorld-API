import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../contexts/ServiceContext';
import { AuthUser } from '../../domain/entities/user';

export const useLoginViewModel = () => {
  const [error, setError] = useState('');
  const [email, setEmail] = useState('alice@example.com');
  const [password, setPassword] = useState('password123');
  const router = useRouter();
  const auth = useAuth();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const user: AuthUser = { email, password };
      const token = await auth.login(user);
      if (token) {
        localStorage.setItem('token', token);
        router.push('/article');
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred');
    }
  }
  return {
    error,
    email,
    password,
    setEmail,
    setPassword,
    handleSubmit,
  };
}
