import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function RandomMonster({ setCallBackRandom }) {
  const navigate = useNavigate();

  const [randomButton, setRandomButton] = useState(false);
  useEffect(() => {
    if (randomButton) {
      const promise = axios.get(`https://mhw-db.com/monsters`);

      promise.then(response => {
        const monstersResponse = response.data;
        const shufflemonstersResponse = monstersResponse.sort(() => Math.random() - 0.5);
        const monsterId = shufflemonstersResponse[0].id
        console.log(shufflemonstersResponse);
        navigate(`/monster/${monsterId}`);
        setRandomButton(false);
      })
      promise.catch(error => { alert(`Algo deu errado ${error.response}`) })
    }

  }, [randomButton]);


  return (
    <button onClick={() => { setRandomButton(true); setCallBackRandom(true) }}> <ion-icon name="dice"></ion-icon> </button>
  )
}