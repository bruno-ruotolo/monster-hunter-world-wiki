import styled from "styled-components"

import Logo from "./MHWLogo.png"

export default function MainScreen() {
  return (
    <MainScreenDiv>
      <img src={Logo} alt="MHW Wiki Logo" />
    </MainScreenDiv>
  )
}

const MainScreenDiv = styled.section`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content: center;
  height:100vh;
`