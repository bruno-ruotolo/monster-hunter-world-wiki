import styled from "styled-components"

import Header from "../Header/Header"

export default function MonsterInfo() {
  return (
    <>
      <Header />
      <MonsterInfoDiv>
        <MonsterNameImg>
          <h1>Monster Name</h1>

          <img
            src="https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-great_jagras_render_001.png"
            alt="monster" />
        </MonsterNameImg>

        <MonsterChar>
          <h2>Monster Descriptions</h2>
          <p>Description: <span>asdasdasdasd</span></p>
          <p>Type: <span>asdasdasdasd</span> </p>
          <p>Species: <span>asdasdasdasd</span> </p>

          <h2>Physical Characteristics</h2>
          <p>Elements: </p>  {/* map */}
          <p>Weaknesses: </p> {/* map */}

          <h2>Extra Information</h2>
          <p>Locations: </p> {/* map */}
          <p>Rewards: </p> {/* map */}

        </MonsterChar>
      </MonsterInfoDiv>
    </>
  )
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
  }

  span {
    color: white;
    font-size: 17px;
    font-weight: 400;
    font-family: 'Cinzel', serif;
  }
`