import React from 'react';

type ContextProps = {
  token: null;
  authenticated: boolean;
  setToken: any;
};

export const Context = React.createContext<Partial<ContextProps>>({});

export const AuthProvider = ({ children }: any) => {
  const localToken: string = localStorage.getItem('_auth_token_') as string;
  const [token, setToken] = React.useState(JSON.parse(localToken));

  React.useEffect(() => {
    if (token) {
      return localStorage.setItem('_auth_token_', token);
    }

    localStorage.removeItem('_auth_token_');
  }, [token]);

  return (
    <Context.Provider
      value={{
        token,
        authenticated: token !== null,
        setToken,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useAuth = (settrOnly: any) => {
  const { token, setToken } = React.useContext(Context);

  return settrOnly ? [setToken] : [token, setToken];
};
