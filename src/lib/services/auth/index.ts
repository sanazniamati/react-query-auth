import axios from 'axios';

const Request = axios.create({ baseURL: 'https://api.mv-team.ir/api' });

export const register = async (data: RegisterSchemaInterface) => {
  const responce = await Request.post<ResponceSchemaInterface>('/users', data);
  return responce.data;
};

export const login = async (data: loginSchemaInterface) => {
  const responce = await Request.post<ResponceSchemaInterface>(
    '/users/login',
    data
  );
  return responce.data;
};

export const getMe = async () => {
  const responce = await Request.get<ResponceSchemaInterface>('/users/me');
  return responce.data;
};
