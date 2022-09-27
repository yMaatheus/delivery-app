const { useCallback, useEffect, useContext, useMemo } = require('react');
const { useState } = require('react');
const { createContext } = require('react');
const { setToken, clearToken, getToken } = require('../helpers/auth');
const { getMe, login: loginUser, register: registerUser } = require('../services/users');

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
      const loginResponse = await loginUser(credentials);
      console.log(loginResponse);
      setToken(loginResponse.token);
      setUser(loginResponse);
    } catch (error) {
      console.log('error', error);
    }
  }, []);

  const register = useCallback(async (credentials) => {
    try {
      const registerResponse = await registerUser(credentials);
      setToken(registerResponse.token);
      setUser(registerResponse);
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
    register,
    logout,
  }), [isFetchingUser, login, register, user]);

  return (
    <UserContext.Provider
      value={ valueToExport }
      { ...props }
    />
  );
}

const useUser = () => useContext(UserContext);

export { UserProvider, useUser };
