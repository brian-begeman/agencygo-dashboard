import { ReactNode, createContext, useState } from 'react';
import fetchReq from 'utils/fetch';

interface AuthContextType {
  isLogin: boolean;
  login: () => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  isLogin: false,
  login: () => {},
  logout: () => {},
});

interface $Props {
  children: ReactNode | ReactNode[];
}

export default function AuthProvider({ children }: $Props) {
  const [isLogin, setIsLogin] = useState(false);

  const login = () => {
    setIsLogin(true);
  };

  const logout = () => {
    let endpoint = 'logout';
    let options = {
      method: 'POST' as 'POST',
      headers: {
        'content-type': 'application/json',
      },
      withAuth: true,
    };
    fetchReq(endpoint, options)
      .then((response) => response.json())
      .then((res) => {
        if (res.message) {
          sessionStorage.removeItem('Authorization');
          setIsLogin(false);
        }
      })
      .catch((err) => {
        console.log('Error occured: ', err);
      });
  };

  return (
    <AuthContext.Provider value={{ isLogin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
