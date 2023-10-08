import { ReactNode, createContext, useState } from 'react';

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
    setIsLogin(false);
  };

  return (
    <AuthContext.Provider value={{ isLogin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
