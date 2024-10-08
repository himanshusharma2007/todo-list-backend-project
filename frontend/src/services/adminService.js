import api from './api'

const API_URL = "/admin";

export const getAdmin = async () => {
  const response = await api.get('/admin');
  console.log(' get admin response.data :>> ', response.data);
  return response;
};
export const getAllUserTodos = async (id) => {
  const response = await api.get(`${API_URL}/user/${id}`);
  return response;
};
export const getAllUsers = async () => {
  try {
    const response = await api.get("/admin/users");
    console.log("response in getAllUsers :>> ", response.data);
    return response.data;
  } catch (error) {
    console.error("Error in getAllUsers:", error.response || error);
    throw error;
  }
};

export const editUserTodo = (id, updatedTodo) => {
  return api.post(`${API_URL}/user-todo/edit/${id}`, updatedTodo);
};

export const deleteUserTodo = (id) => {
  return api.get(`${API_URL}/user-todo/delete/${id}`);
};

export const deleteDeveloper = (id) => {
  return api.get(`${API_URL}/user/delete/${id}`);
};

export const editDeveloperName =async (id, updatedName) => {
  const response= await  api.post(`/admin/user/edit/${id}`, updatedName);
  console.log('response :>> ', response);
  return response;
};
