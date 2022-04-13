import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { useContext, useState, useEffect } from "react"
import axios from "axios"

import { MonsterContext } from "../Contexts/Monster"
import Logo from "./MHWLogo.png"

export default function MainScreen() {
  const [name, setName] = useState('');
  const [callEffect, setCallEffect] = useState(false)
  const { monsterId, setMonsterId } = useContext(MonsterContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (callEffect) {
      const promise = axios.get(`https://mhw-db.com/monsters`);

      promise.then(response => {
        response.data.forEach(response => {
          if (response.name === name) {
            setMonsterId(response.id);
          }
        })
        setCallEffect(false);
      })
      promise.catch(error => { alert(`Algo deu errado ${error.response}`) })
    }
    if (monsterId !== 0) {
      navigate(`/monster/${monsterId}`);
    }
  }, [callEffect]);



  function handleForm(e) {
    e.preventDefault();
    setCallEffect(true);
  }

  return (
    <MainScreenDiv>
      <img src={Logo} alt="MHW Wiki Logo" />
      <Form onSubmit={handleForm}>
        <input placeholder="Type the monster's name" onChange={(e) => setName(e.target.value)} />
        <button type="submit"> <ion-icon name="search"></ion-icon> </button>
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

  button{
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

    &::placeholder {
      text-align: center;
    }
  }
`