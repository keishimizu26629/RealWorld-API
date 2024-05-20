'use client';

import { useArticleViewModel } from './articleViewModel';
import { useRouter } from 'next/navigation';

export default function ArticlePage() {
  const { article, error, deleteArticle } = useArticleViewModel();
  const router = useRouter();

  if (error) {
    return <div>{error}</div>;
  }

  if (!article) {
    return <div>Loading...</div>;
  }

  const createdAt = article.created_at ? new Date(article.created_at).toLocaleDateString() : 'N/A';

  const handleEdit = () => {
    router.push(`/article/edit/${article.id}`);
  };

  const handleDelete = async () => {
    await deleteArticle();
  };

  return (
    <div className="article-page">
      <div className="banner">
        <div className="container">
          <h1>{article.title}</h1>
          <div className="article-meta">
            <a href={`/profile/${article.user_id}`}><img src="http://i.imgur.com/Qr71crq.jpg" /></a>
            <div className="info">
              <a href={`/profile/${article.user_id}`} className="author">Author Name</a>
              <span className="date">{createdAt}</span>
            </div>
            <button className="btn btn-sm btn-outline-secondary">
              <i className="ion-plus-round"></i>
              &nbsp; Follow Author <span className="counter">(10)</span>
            </button>
            &nbsp;&nbsp;
            <button className="btn btn-sm btn-outline-primary">
              <i className="ion-heart"></i>
              &nbsp; Favorite Post <span className="counter">(29)</span>
            </button>
            <button className="btn btn-sm btn-outline-secondary" onClick={handleEdit}>
              <i className="ion-edit"></i> Edit Article
            </button>
            <button className="btn btn-sm btn-outline-danger" onClick={handleDelete}>
              <i className="ion-trash-a"></i> Delete Article
            </button>
          </div>
        </div>
      </div>

      <div className="container page">
        <div className="row article-content">
          <div className="col-md-12">
            <p>{article.content}</p>
          </div>
        </div>

        <hr />

        <div className="article-actions">
          <div className="article-meta">
            <a href={`/profile/${article.user_id}`}><img src="http://i.imgur.com/Qr71crq.jpg" /></a>
            <div className="info">
              <a href={`/profile/${article.user_id}`} className="author">Author Name</a>
              <span className="date">{createdAt}</span>
            </div>

            <button className="btn btn-sm btn-outline-secondary">
              <i className="ion-plus-round"></i>
              &nbsp; Follow Author
            </button>
            &nbsp;
            <button className="btn btn-sm btn-outline-primary">
              <i className="ion-heart"></i>
              &nbsp; Favorite Article <span className="counter">(29)</span>
            </button>
            <button className="btn btn-sm btn-outline-secondary" onClick={handleEdit}>
              <i className="ion-edit"></i> Edit Article
            </button>
            <button className="btn btn-sm btn-outline-danger" onClick={handleDelete}>
              <i className="ion-trash-a"></i> Delete Article
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
