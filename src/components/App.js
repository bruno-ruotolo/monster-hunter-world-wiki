import { BrowserRouter, Routes, Route } from "react-router-dom"

import MainScreen from "./MainScreen/MainScreen"
import MonsterInfo from "./MonsterInfo/MonsterInfo"
import MonsterProvider from "./Contexts/MonsterContext"

import Reset from "./GlobalStyles/Reset"
import GlobalStyles from "./GlobalStyles/GlobalStyles"

export default function App() {

  return (
    <MonsterProvider>
      <BrowserRouter>
        <Reset />
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="/monster/:id" element={<MonsterInfo />} />
        </Routes>
      </BrowserRouter>
    </MonsterProvider>

  )
}

