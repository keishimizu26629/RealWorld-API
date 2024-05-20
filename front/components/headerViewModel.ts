import { useState, useEffect } from 'react';

export const useHeaderViewModel = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogoutButton, setShowLogoutButton] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setShowLogoutButton(false);
    window.location.href = '/';
  }

  const toggleLogoutButton = () => {
    setShowLogoutButton(!showLogoutButton);
  };

  return {
    isLoggedIn,
    showLogoutButton,
    handleLogout,
    toggleLogoutButton,
  };
}
