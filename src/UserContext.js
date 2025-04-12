import React, { createContext, useState } from 'react';

// Tạo context
export const UserContext = createContext();

// Tạo Provider
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // { email: '', ... }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
