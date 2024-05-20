import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useArticleService } from '../../../contexts/ServiceContext';
import { Article } from '../../../domain/entities/article';

export const useArticleViewModel = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [errorMessages, setErrorMessages] = useState<string[]>([]);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const articleService = useArticleService();
  const router = useRouter();

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handlePublish = async () => {
    if (!title) {
      setErrorMessages(['That title is required']);
      return;
    }

    const article: Article = {
      title,
      content,
      user_id: 1,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    try {
      await articleService.postArticle(article);
      setSuccessMessage('投稿できました');
      setTimeout(() => {
        router.push('/article');
      }, 2000);
    } catch (error) {
      console.error('Error', error);
      setErrorMessages(['Failed to publish article']);
    }
  };

  return {
    title,
    content,
    errorMessages,
    successMessage,
    handleTitleChange,
    handleContentChange,
    handlePublish,
  };
};
