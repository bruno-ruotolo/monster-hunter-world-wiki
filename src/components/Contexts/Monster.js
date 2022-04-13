import { createContext, useState } from "react"

export const MonsterContext = createContext({});

export default function MonsterProvider({ children }) {
  const [monsterId, setMonsterId] = useState(0);

  return (
    <MonsterContext.Provider value={{ monsterId, setMonsterId }}>
      {children}
    </MonsterContext.Provider>
  )
};