import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useArticleService } from '../../../../contexts/ServiceContext';
import { Article } from '../../../../domain/entities/article';

export const useArticleEditViewModel = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [errorMessages, setErrorMessages] = useState<string[]>([]);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const params = useParams();
  const router = useRouter();
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
      setTitle(data.title);
      setContent(data.content);
    } catch (err) {
      setErrorMessages(['Failed to fetch article']);
    }
  };

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
      id: Number(params.id),
      title,
      content,
      user_id: 1, // Replace with the actual user_id
      created_at: new Date().toISOString(), // This might need adjustment
    };

    try {
      await articleService.updateArticle(article);
      setSuccessMessage('投稿を更新しました');
      setTimeout(() => {
        router.push(`/article/${params.id}`);
      }, 2000);
    } catch (error) {
      setErrorMessages(['Failed to update article']);
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
