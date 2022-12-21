import { createContext, useState } from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(localStorage.getItem('access_token'));
  const [persist, setPersist] = useState(JSON.parse(localStorage.getItem('persist')) || false);

  return (
    <AuthContext.Provider value={{ accessToken, setAccessToken, persist, setPersist }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
