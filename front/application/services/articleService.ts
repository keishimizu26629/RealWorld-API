import { postArticle, getArticleById, updateArticleById, deleteArticleById } from '../../infrastructure/repositories/mainRepository';
import { Article } from '../../domain/entities/article';

export class ArticleService {
  private postArticleFn: typeof postArticle;
  private getArticleByIdFn: typeof getArticleById;
  private updateArticleByIdFn: typeof updateArticleById;
  private deleteArticleByIdFn: typeof deleteArticleById;

  constructor(
    postArticleFn: typeof postArticle,
    getArticleByIdFn: typeof getArticleById,
    updateArticleByIdFn: typeof updateArticleById,
    deleteArticleByIdFn: typeof deleteArticleById
  ) {
    this.postArticleFn = postArticleFn;
    this.getArticleByIdFn = getArticleByIdFn;
    this.updateArticleByIdFn = updateArticleByIdFn;
    this.deleteArticleByIdFn = deleteArticleByIdFn;
  }

  async postArticle(article: Article): Promise<any> {
    const { title, content, user_id } = article;
    return this.postArticleFn(title, content, user_id);
  }

  async getArticle(id: number): Promise<Article> {
    return this.getArticleByIdFn(id);
  }

  async updateArticle(article: Article): Promise<any> {
    const { id, title, content } = article;
    return this.updateArticleByIdFn(id!, title, content);
  }

  async deleteArticle(id: number): Promise<void> {
    return this.deleteArticleByIdFn(id);
  }
}
