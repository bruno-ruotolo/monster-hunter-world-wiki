import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { useState, useEffect, useContext } from "react"

import Logo from "./MHWLogo.png"
import RandomMonster from "./RandomMonster"
import { MonsterContext } from "../Contexts/MonsterContext"

export default function MainScreen() {
  const { monsterArr } = useContext(MonsterContext)

  const [name, setName] = useState('');
  const [callEffect, setCallEffect] = useState(false);
  const [callBackRandom, setCallBackRandom] = useState(false);
  const [filter, setFilter] = useState([]);

  const navigate = useNavigate();

  let counter = 0;

  useEffect(() => {
    if (callEffect) {
      monsterArr.forEach(response => {
        if (response.name === capitalizeMonsterName()) {
          navigate(`/monster/${response.id}`);
        } else {
          counter++;
        }
      })
      if (counter === monsterArr.length && !callBackRandom) {
        alert("Please, check if the monster's name is correct");
      }
      setCallEffect(false);
    }
  }, [callEffect]);

  function capitalizeMonsterName() {
    const monsterName = name;

    if (monsterName.includes("Viper Tobi-Kadachi")) {
      return "Viper Tobi-Kadachi"
    }

    return monsterName.includes("-")
      ? monsterName
        .toLowerCase()
        .split(/-/g)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('-')
      : monsterName
        .toLowerCase()
        .split(/\s/g)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
  };

  function handleForm(e) {
    e.preventDefault();
    setCallEffect(true);
  }

  useEffect(() => {
    if (name !== "") {
      setFilter(monsterArr.filter((data) => {
        return data.name.toLowerCase().includes(name.toLowerCase());
      }))
    } else { setFilter([]) }
  }, [name])

  return (
    <MainScreenDiv>
      <img src={Logo} alt="MHW Wiki Logo" />
      <Form onSubmit={handleForm}>
        <input
          placeholder="Type the monster's name"
          onChange={(e) => { setName(e.target.value) }}
          required
          pattern="[A-Z a-z]+"
          title="Please enter on alphabets only. "
          disabled={callEffect}
          value={name}
        />
        <button type="submit" disabled={callEffect}> <ion-icon name="search"></ion-icon> </button>
        <RandomMonster setCallBackRandom={(value) => { setCallBackRandom(value); setCallEffect(value) }} />
        <MonsterNameList >
          {filter.slice(0, 10).map((element, index) => {
            return <p onClick={() => { setName(element.name); setCallEffect(true) }} key={index}>{element.name}</p>
          })}
        </MonsterNameList>
      </Form>

    </MainScreenDiv >
  )
}

const MainScreenDiv = styled.section`
  top: 0;
  left: 50%;
  margin-left: -350px;
  position: absolute;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content: center;
 
`

const Form = styled.form`
position: relative;
  display: flex;
  align-items: center;

  button {
    text-decoration: none;
    border: none; 
    background-color: transparent;

    ion-icon {
      color: #ffffff;
      font-size: 40px;
    }
  }

  input {
    position: relative;
    border-radius: 5px;
    width: 400px;
    height: 40px;
    border: none;
    font-size: 20px;
    font-weight: 800;
    font-family: 'Cinzel', serif;
     padding-left: 10px;

    &::placeholder {
      position: absolute;
        line-height: 40px;
        text-align: center;
        width: 390px;
    }

    &:disabled {
      color: #999999;
      background-color: #001a00;
    }
  }
`

const MonsterNameList = styled.div`
  background-color: #ffffff;
  width: 400px;
  color: #000000;
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 50px;
  padding-left: 10px;
  font-family: 'Cinzel', serif;
  font-weight: 800;
  box-shadow: 2px 2px 4px #7EB561;
  border-radius: 2px;
  cursor:pointer;

  p{
    margin-bottom: 5px;
  }

  p:first-child{
    margin-top: 5px;
  }

  p:last-child{
    margin-bottom: 5px;
  }
`