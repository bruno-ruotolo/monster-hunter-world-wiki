import styled from "styled-components"

export default function Footer() {
  return (
    <FooterDiv>
      <p>Created by <a href="https://github.com/bruno-ruotolo" target="_blank">Bruno R.</a></p>
      <p>MHW-DB by <a href="https://github.com/LartTyler/MHWDB-API" target="_blank">Tyler Lartonoix</a></p>
    </FooterDiv>
  )
}

const FooterDiv = styled.footer`
  position:absolute;
  left: 50%;
  color: #999999;
  font-family: 'Cinzel', serif;
  bottom: 20px;
  text-align: center;
  width: 300px;
  font-weight: 800;
  margin-left: -160px;
  text-shadow: 0px 0px 10px #7EB561;
  
  a {
    color: #00C9C8;
    text-decoration: none;
  }
  p {
    margin-bottom: 10px;
  }
`