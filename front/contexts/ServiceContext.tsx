import { createContext, useContext, ReactNode } from 'react';
import { AuthService } from '../application/services/authService';
import { UserService } from '../application/services/userService';
import { ArticleService } from '../application/services/articleService';
import { mainRepository } from '../infrastructure/repositories/mainRepository';
import { mockRepository } from '../infrastructure/repositories/mockRepository';

// 環境変数またはコマンドライン引数でMockを使用するかどうかを判断
const isTest = process.env.NEXT_PUBLIC_USE_MOCK === 'true';

const repositories = isTest ? mockRepository : mainRepository;

const authService = new AuthService(repositories.login);
const userService = new UserService(repositories.getUserData);
const articleService = new ArticleService(repositories.postArticle, repositories.getArticleById, repositories.deleteArticleById);

const services = {
  authService,
  userService,
  articleService,
};

const ServiceContext = createContext(services);

export const ServiceProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ServiceContext.Provider value={services}>
      {children}
    </ServiceContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(ServiceContext).authService;
};

export const useUser = () => {
  return useContext(ServiceContext).userService;
};

export const useArticleService = () => {
  return useContext(ServiceContext).articleService;
};
