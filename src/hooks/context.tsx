import { Dispatch, createContext, useState } from 'react';
import { ChildrenType } from '../interfaces/childrenType';

interface MyContextType {
  darkMode: boolean;
  setDarkMode: Dispatch<React.SetStateAction<boolean>>;
}

export const MyContext = createContext<MyContextType | undefined>(undefined);

export function Context({ children }: ChildrenType) {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <MyContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </MyContext.Provider>
  );
}
