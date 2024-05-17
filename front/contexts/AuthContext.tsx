import { createContext, useContext, ReactNode } from 'react';
import { AuthService } from '../application/services/authService';
import { authRepository } from '../infrastructure/repositories/authRepository'
import { mockAuthRepository } from '../infrastructure/repositories/mockRepository';

// 環境変数またはコマンドライン引数でMockを使用するかどうかを判断
const isTest = process.env.USE_MOCK === 'true';

const authService = new AuthService(isTest ? mockAuthRepository : authRepository);

const AuthContext = createContext(authService);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  return (
    <AuthContext.Provider value={authService}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
