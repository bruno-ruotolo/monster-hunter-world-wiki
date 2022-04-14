import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { useContext, useState, useEffect } from "react"
import axios from "axios"

import Logo from "./Logo.png"
import { MonsterContext } from "../Contexts/Monster";

export default function Header({ setHeader, header }) {
  const [name, setName] = useState("")
  const [callEffect, setCallEffect] = useState(false);

  const navigate = useNavigate();

  let counter = 0;
  let monstersResponse = [];

  const { setMonsterId } = useContext(MonsterContext);

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
        if (counter === monstersResponse.length) {
          alert("Please, check if the monster's name is correct");
        }
        setCallEffect(false);
        setHeader(!header);
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

  function handleSubmit(e) {
    e.preventDefault();
    setCallEffect(true);
  }

  return (
    <HeaderDiv>
      <img onClick={() => {
        setMonsterId(0);
        navigate('/')
      }} src={Logo} alt="MHW Wiki Logo" />
      <Form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setName(e.target.value)}
          placeholder="Type the monster's name"
          required
          pattern="[A-Z a-z]+"
          title="Please enter on alphabets only. "
          disabled={callEffect}
        />
        <button type="submit"> <ion-icon name="search"></ion-icon> </button>
      </Form>
    </HeaderDiv>
  )
}

const HeaderDiv = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0 50px;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;  
  width: 100%;
  background-color: #2A272A;
`

const Form = styled.form`
  display: flex;
  align-items: center;
  height: 57px;


    button{
      text-decoration: none;
      border: none; 
      background-color: transparent;

        ion-icon {
          color: #ffffff;
          font-size: 25px;
      }
    }

    input {
      position: relative;
      border-radius: 5px;
      width: 350px;
      height: 35px;
      border: none;
      font-size: 17px;
      font-weight: 800;
      font-family: 'Cinzel', serif;
      padding-left: 10px;

      &::placeholder {
        position: absolute;
        line-height: 35px;
        text-align: center;
        width: 340px;
      }

      &:disabled {
      color: #999999;
      background-color: #001a00;
    }
    }
`