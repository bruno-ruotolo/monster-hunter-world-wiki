import "./styles.css"
import { createRoot } from "react-dom/client"
import React from "react"
import Img from "./teste.png"

const root = createRoot(document.querySelector(".root"));
root.render(<img src={Img} tab="iamgem"></img>);
