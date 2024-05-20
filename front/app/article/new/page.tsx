'use client';

import { ServiceProvider } from '../../../contexts/ServiceContext';
import ArticlePostPage from './ArticlePostPage';

export default function Page() {
  return (
    <ServiceProvider>
      <ArticlePostPage />
    </ServiceProvider>
  );
}
