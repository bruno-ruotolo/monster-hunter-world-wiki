import styled from "styled-components"

import Logo from "./MHWLogo.png"

export default function MainScreen() {
  return (
    <MainScreenDiv>
      <img src={Logo} alt="MHW Wiki Logo" />
      <Form>
        <input placeholder="Type the monster's name" />
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