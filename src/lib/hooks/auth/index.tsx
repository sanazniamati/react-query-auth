import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getMe, register } from '../../services/auth';
import { useNavigate } from 'react-router-dom';

export const useRegister = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: register,
    onSuccess: (responce) => {
      queryClient.setQueryData(['user'], responce.doc);
      console.log(responce.doc);
      navigate('/');
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

export const useGetMe = () => {
  return useQuery(['user'], { queryFn: getMe });
};
