import { createContext, useState, useEffect } from "react"
import axios from "axios";

export const MonsterContext = createContext({});

export default function MonsterProvider({ children }) {
  const [monsterArr, setMonsterArr] = useState([]);

  useEffect(() => {
    const promise = axios.get(`https://mhw-db.com/monsters`);

    promise.then(response => setMonsterArr(response.data))
    promise.catch(error => { alert(`Algo deu errado ${error.response}`) })
    console.log(monsterArr)
  }, []);
  return (
    <MonsterContext.Provider value={{ monsterArr, setMonsterArr }}>
      {children}
    </MonsterContext.Provider>
  )
};