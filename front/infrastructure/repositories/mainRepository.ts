import axios from 'axios';

export const login = async (email: string, password: string) => {
  const response = await axios.post('http://localhost:3000/api/v1/login', {
    email,
    password,
  });
  return response.data;
}

export const getUserData = async (token: string) => {
  try {
    const response = await axios.get('http://localhost:3000/api/v1/get_user', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data.user;
  } catch (error) {
    console.error('Error', error);
    throw error;
  }
}

export const postArticle = async (title: string, content: string, user_id: number) => {
  const response = await axios.post('http://localhost:3000/api/v1/articles', {
    title,
    content,
    user_id,
  });
  return response.data;
}

export const getArticleById = async (id: number) => {
  const response = await axios.get(`http://localhost:3000/api/v1/articles/${id}`);
  return response.data;
}

export const deleteArticleById = async (id: number) => {
  await axios.delete(`http://localhost:4001/article/${id}`);
}

export const mainRepository = {
  login,
  getUserData,
  postArticle,
  getArticleById,
  deleteArticleById,
};
