import styled from "styled-components"
import { useContext, useState, useEffect } from "react"
import axios from "axios"

import { MonsterContext } from "../Contexts/Monster"
import Header from "../Header/Header"
import Loader from "./Loader.svg"

export default function MonsterInfo() {
  const { monsterId } = useContext(MonsterContext);
  const [monsterData, setMonsterData] = useState({
    name: "",
    description,
    species,
    type,
    weaknesses: [],
    locations: [],
    rewards: []
  });

  let id = document.URL.slice(-2);

  if (id.match(/[a-z]|[A-Z]|\W/gi)) {
    id = id.replace(/[a-z]|[A-Z]|\W/gi, "");
  }

  useEffect(() => {
    const promise = axios.get(`https://mhw-db.com/monsters/${id}`);

    promise.then(response => setMonsterData(response.data))
  }, []);

  const { name, description, species, type, elements, weaknesses, locations, rewards } = monsterData;
  const nameHandle = name.toLowerCase().replace(/\s/, "_");

  let weaknessesArr = null;
  let locationsArr = null;
  let rewardsArr = null;

  weaknessesArr = (weaknesses.map((weaknesse) => {
    return weaknesse.element;
  }))

  locationsArr = (locations.map((location) => {
    return location.name;
  }))

  rewardsArr = (rewards.map((reward) => {
    return reward.item.name;
  }))

  return monsterData.name !== "" ? (
    <>
      <Header />
      <MonsterInfoDiv>
        <MonsterNameImg>
          <h1>{name}</h1>
          <img
            src={`https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-${nameHandle}_render_001.png`}
            alt="monster" />
        </MonsterNameImg>

        <MonsterChar>
          <h2>Monster Description</h2>
          <p>Description: <span>{description}</span></p>
          <p>Type: <span>{type}</span> </p>
          <p>Species: <span>{species}</span> </p>

          <h2>Physical Characteristics</h2>
          <p>Elements: <span>{elements.join(", ")}</span></p>
          <p>Weaknesses:<span>{weaknessesArr.join(", ")}</span></p>

          <h2>Extra Information</h2>
          <p>Locations: <span>{locationsArr.join(", ")}</span></p>
          <p>Rewards: <span>{rewardsArr.join(", ")}</span> </p>

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
  width: 900px;
  flex-wrap: wrap;
  
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
    margin-bottom: 10px;
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