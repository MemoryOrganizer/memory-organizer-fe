import React, { createContext, useState, useContext } from 'react';
import { useEffect } from 'react';
import { verify } from '../../services/auth';

const MemoryContext = createContext();

export const MemoryProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const handleSetUser = (user) => {
    setUser(user);
    console.log(user);
  };

  useEffect(() => {
    verify().then(user => setUser(user));
  }, []);

  return (
    <MemoryContext.Provider
      value= {{ user, handleSetUser }}
    >
      {children}
    </MemoryContext.Provider>
  );
};

export const useProvider = () => {
  const context = useContext(MemoryContext);
  return context;
};

export const useUser = () => {
  const { user } = useContext(MemoryContext);
  return user;
};

export const useHandleSetUser = () => {
  const { handleSetUser } = useContext(MemoryContext);
  return handleSetUser;
};
