import { BrowserRouter, Routes, Route } from "react-router-dom"

import MainScreen from "./MainScreen/MainScreen"

import Reset from "./GlobalStyles/Reset"
import GlobalStyles from "./GlobalStyles/GlobalStyles"

export default function App() {

  return (
    <BrowserRouter>
      <Reset />
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<MainScreen />} />
      </Routes>
    </BrowserRouter>

  )
}