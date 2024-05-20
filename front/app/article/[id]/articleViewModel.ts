import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useArticleService } from '../../../contexts/ServiceContext';
import { Article } from '../../../domain/entities/article';

export const useArticleViewModel = () => {
  const [article, setArticle] = useState<Article | null>(null);
  const [error, setError] = useState<string | null>(null);
  const params = useParams();
  const articleService = useArticleService();

  useEffect(() => {
    const id = params.id;
    if (id) {
      fetchArticle(Number(id));
    }
  }, [params.id]);

  const fetchArticle = async (id: number) => {
    try {
      const data = await articleService.getArticle(id);
      console.log(data);
      setArticle(data);
    } catch (err) {
      setError('Failed to fetch article');
    }
  };

  return {
    article,
    error,
  };
};
