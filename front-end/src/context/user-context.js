const { useCallback, useEffect, useContext, useMemo } = require('react');
const { useState } = require('react');
const { createContext } = require('react');
const { setToken, clearToken, getToken } = require('../helpers/auth');
const { getMe } = require('../services/users');

const UserContext = createContext({});

function UserProvider(props) {
  const [isFetchingUser, setIsFetchingUser] = useState(true);
  const [user, setUser] = useState(null);

  const fetchUser = useCallback(async () => {
    const token = await getToken();

    try {
      if (token) {
        const userResponse = await getMe();
        return setUser(userResponse);
      }
      if (['/login'].includes(window.location.pathname)) {
        return;
      }
      window.location.href = '/login';
    } catch (error) {
      console.log('error', error);
    } finally {
      setIsFetchingUser(false);
    }
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const login = useCallback(async (credentials) => {
    try {
      const loginResponse = await login(credentials);
      setToken(loginResponse.token);
      setUser(loginResponse);
    } catch (error) {
      console.log('error', error);
    }
  }, []);

  const logout = () => {
    clearToken();
    setUser(null);
  };

  const valueToExport = useMemo(() => ({
    user,
    isFetchingUser,
    login,
    logout,
  }), [isFetchingUser, login, user]);

  return (
    <UserContext.Provider
      value={ valueToExport }
      { ...props }
    />
  );
}

const useUser = () => useContext(UserContext);

export { UserProvider, useUser };
