import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { useContext, useState, useEffect } from "react"

import Logo from "./Logo.png"
import { MonsterContext } from "../Contexts/MonsterContext";

export default function Header({ setHeader, header }) {
  const { monsterArr } = useContext(MonsterContext);

  const [name, setName] = useState("")
  const [callEffect, setCallEffect] = useState(false);
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
      if (counter === monsterArr.length) {
        alert("Please, check if the monster's name is correct");
      }
      setCallEffect(false);
      setName("");
      setHeader(!header);
    }
  }, [callEffect]);

  function capitalizeMonsterName() {
    const monsterName = name;
    console.log(monsterName)

    if (monsterName.includes("Viper Tobi-Kadachi")) {
      return "Viper Tobi-Kadachi"
    }

    return monsterName.includes("-") ?
      monsterName
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

  function handleSubmit(e) {
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
    <HeaderDiv>
      <img onClick={() => {
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
          value={name}
        />
        <button type="submit"> <ion-icon name="search"></ion-icon> </button>
        <MonsterNameList>
          {filter.slice(0, 8).map((element, index) => {
            return <p onClick={() => { setName(element.name); setCallEffect(true) }} key={index}>{element.name}</p>
          })}
        </MonsterNameList>
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