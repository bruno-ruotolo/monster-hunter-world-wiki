import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"

import Logo from "./Logo.png"
import { MonsterContext } from "../Contexts/Monster";

export default function Header() {
  const navigate = useNavigate();

  const { setMonsterId } = useContext(MonsterContext);

  return (
    <HeaderDiv>
      <img onClick={() => {
        setMonsterId(0);
        navigate('/')
      }} src={Logo} alt="MHW Wiki Logo" />
      <Form>
        <input placeholder="Type the monster's name" />
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
    }
`