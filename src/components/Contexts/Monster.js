import { createContext, useState } from "react"

export const MonsterContext = createContext({});

export default function MonsterProvider({ children }) {
  const [monsterName, setMonsterName] = useState();

  return (
    <MonsterContext.Provider value={{ monsterName, setMonsterName }}>
      {children}
    </MonsterContext.Provider>
  )
};