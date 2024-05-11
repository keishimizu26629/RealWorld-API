'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Header from '../components/Header';

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
    <>
      <div className="home-page">
        <Header/>
        <div className="banner">
          <div className="container">
            <h1 className="logo-font">conduit</h1>
            <p>A place to share your knowledge.</p>
          </div>
        </div>
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
              <ul className="pagination">
                <li className="page-item active">
                  <a className="page-link" href="">1</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="">2</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <div className="sidebar">
                <p>Popular Tags</p>

                <div className="tag-list">
                  <a href="" className="tag-pill tag-default">programming</a>
                  <a href="" className="tag-pill tag-default">javascript</a>
                  <a href="" className="tag-pill tag-default">emberjs</a>
                  <a href="" className="tag-pill tag-default">angularjs</a>
                  <a href="" className="tag-pill tag-default">react</a>
                  <a href="" className="tag-pill tag-default">mean</a>
                  <a href="" className="tag-pill tag-default">node</a>
                  <a href="" className="tag-pill tag-default">rails</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
