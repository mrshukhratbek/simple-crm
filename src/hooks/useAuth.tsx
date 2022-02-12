import React from 'react';
import { AuthContext } from '../context/AuthContext';

const useAuth = (settrOnly: any) => {
  const { token, setToken } = React.useContext(AuthContext);

  return settrOnly ? [setToken] : [token, setToken];
};

export default useAuth;
