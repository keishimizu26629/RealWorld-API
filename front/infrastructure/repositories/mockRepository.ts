export const login = async (email: string, password: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'mock-token',
        user: { id: 1, username: 'mockUser', email }
      });
    }, 1000);
  });
}

export const getUserData = async (token: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        user: {
          id: 1,
          username: 'mockUser',
          email: 'mock@example.com'
        }
      });
    }, 1000);
  });
}

export const postArticle = async (title: string, content: string, user_id: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title,
        content,
        user_id,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      });
    }, 1000);
  });
}

export const getArticleById = async (id: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id,
        title: 'Mock Article Title',
        content: 'This is the mock content of the article.',
        user_id: 1,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      });
    }, 1000);
  });
}

export const updateArticleById = async () => {

}

export const deleteArticleById = async () => {

}

export const mockRepository = {
  login,
  getUserData,
  postArticle,
  getArticleById,
  updateArticleById,
  deleteArticleById,
};
