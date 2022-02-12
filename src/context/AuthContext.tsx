import React from 'react';

type ContextProps = {
  token: null;
  authenticated: boolean;
  setToken: any;
};

export const AuthContext = React.createContext<Partial<ContextProps>>({});

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
    <AuthContext.Provider
      value={{
        token,
        authenticated: token !== null,
        setToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
