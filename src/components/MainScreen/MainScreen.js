import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

import axios from "axios"
import Logo from "./MHWLogo.png"
import RandomMonster from "./RandomMonster"

export default function MainScreen() {
  const [name, setName] = useState('');
  const [callEffect, setCallEffect] = useState(false);
  const [callBackRandom, setCallBackRandom] = useState(false)

  const navigate = useNavigate();

  let counter = 0;
  let monstersResponse = [];

  useEffect(() => {
    if (callEffect) {
      const promise = axios.get(`https://mhw-db.com/monsters`);

      promise.then(response => {
        monstersResponse = response.data;
        monstersResponse.forEach(response => {
          if (response.name === capitalizeMonsterName()) {
            navigate(`/monster/${response.id}`);
          } else {
            counter++;
          }
        })
        console.log(monstersResponse.length);
        if (counter === monstersResponse.length && !callBackRandom) {
          alert("Please, check if the monster's name is correct");
        }
        setCallEffect(false);
      })
      promise.catch(error => { alert(`Algo deu errado ${error.response}`) })
    }
  }, [callEffect]);

  function capitalizeMonsterName() {
    const monsterName = name;

    return monsterName
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  };

  function handleForm(e) {
    e.preventDefault();
    setCallEffect(true);
  }

  return (
    <MainScreenDiv>
      <img src={Logo} alt="MHW Wiki Logo" />
      <Form onSubmit={handleForm}>
        <input
          placeholder="Type the monster's name"
          onChange={(e) => setName(e.target.value)}
          required
          pattern="[A-Z a-z]+"
          title="Please enter on alphabets only. "
          disabled={callEffect}
        />
        <button type="submit" disabled={callEffect}> <ion-icon name="search"></ion-icon> </button>
        <RandomMonster setCallBackRandom={(value) => { setCallBackRandom(value); setCallEffect(value) }} />
      </Form>
    </MainScreenDiv >
  )
}

const MainScreenDiv = styled.section`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content: center;
  height:100vh;
`

const Form = styled.form`
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