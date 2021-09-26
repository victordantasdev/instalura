import { useEffect, useState } from 'react';
import { userService } from '../user/userService';

export const useUserService = {
  getProfilePage() {
    const [response, setResponse] = useState({
      data: null,
      loading: true,
      error: null,
    });

    useEffect(() => {
      userService.getProfilePage()
        .then((res) => {
          setResponse((currentState) => ({
            ...currentState,
            data: res,
            loading: false,
            error: null,
          }));
        })
        .catch((err) => {
          setResponse((currentState) => ({
            ...currentState,
            data: null,
            loading: false,
            error: err.message,
          }));
        });
    }, []);

    return response;
  },
};
