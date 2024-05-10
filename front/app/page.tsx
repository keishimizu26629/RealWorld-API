'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Article {
  id: number;
  title: string;
  content: string;
  user_id: number;
  created_at: string;
  update_at: string;
}

export default function Home() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/articles');
        console.log('API Response:', response.data);
        setArticles(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="home-page">
      {/* 他のコンポーネント */}
      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            {/* 他のコンポーネント */}
            {articles.map((article) => (
              <div key={article.id} className="article-preview">
                <div className="article-meta">
                  {/* 他のメタデータ */}
                </div>
                <Link href={`/article/${article.id}`}>
                  <span className="preview-link">
                    <h1>{article.title}</h1>
                    <p>{article.content}</p>
                    <span>Read more...</span>
                  </span>
                </Link>
              </div>
            ))}
            {/* ページネーション */}
          </div>
          {/* サイドバー */}
        </div>
      </div>
    </div>
  );
}
