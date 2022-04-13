import styled from "styled-components"
import { useContext, useState, useEffect } from "react"
import axios from "axios"

import { MonsterContext } from "../Contexts/Monster"
import Header from "../Header/Header"
import Loader from "./Loader.svg"

export default function MonsterInfo() {
  const { monsterName } = useContext(MonsterContext);
  const [monsterData, setMonsterData] = useState([]);
  console.log(monsterData)

  useEffect(() => {
    const promise = axios.get(`https://mhw-db.com/monsters`);
    promise.then(response => {
      console.log('Entrei')
      // setMonsterData(response.data.filter((monsterObj) => {
      //   return monsterName === monsterObj.name;
      // }));
    });
  }, []);

  return monsterData.length !== 0 ? (
    <>
      <Header />
      <MonsterInfoDiv>
        <MonsterNameImg>
          <h1>Monster Name</h1>

          <img
            src="https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-great_jagras_render_001.png"
            alt="monster" />
        </MonsterNameImg>

        <MonsterChar>
          <h2>Monster Description</h2>
          <p>Description: <span>asdasdasdasd</span></p>
          <p>Type: <span>asdasdasdasd</span> </p>
          <p>Species: <span>asdasdasdasd</span> </p>

          <h2>Physical Characteristics</h2>
          <p>Elements: </p>  {/* map */}
          <p>Weaknesses: </p> {/* map */}

          <h2>Extra Information</h2>
          <p>Locations: </p> {/* map */}
          <p>Rewards: </p> {/* map */}

        </MonsterChar>
      </MonsterInfoDiv>
    </>
  ) : (<MonsterLoader><Loader width="300px" /></MonsterLoader>);
}

const MonsterInfoDiv = styled.section`
 display: flex;
 flex-direction: column;
 align-items: center; 
`

const MonsterNameImg = styled.div`
  margin-top: 100px;

h1 {
   color: #ffffff;
   text-align: center;
   font-size: 40px;
   font-family: 'Cinzel', serif;
   font-weight: 800;
   text-shadow: 2px 2px 4px #7EB561;
 }
 img {
    margin-top: 50px;
    width: 400px;
  }
`

const MonsterChar = styled.article`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  
  h2{
    color: white;
    font-size: 30px;
    margin-top: 30px;
    margin-bottom: 10px;
    font-family: 'Cinzel', serif;
    font-weight: 800;
    text-shadow: 2px 2px 4px #7EB561;
  }

  p {
    color: white;
    font-size: 20px;
    font-weight: 800;
    font-family: 'Cinzel', serif;
  }

  span {
    color: white;
    font-size: 17px;
    font-weight: 400;
    font-family: 'Cinzel', serif;
  }
`

const MonsterLoader = styled.div`
  display: flex;
 flex-direction: column;
 align-items: center; 
 justify-content: center;
 height: 100vh;
  img {
    margin-top: 50px;
    width: 400px;
  }
`