import { ExpandMore } from "@mui/icons-material";
import "./intro.scss";
 import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {

  const textRef = useRef()

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ['Developer', 'Programmer', 'Designer']
    })
    },[])
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img cla src="assets/Adel.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hey There, I'm</h2>
          <h1>Adel Alkhesh</h1>
          <h3>Junior <span ref={textRef}></span></h3>
        </div>
        <a href="#portfolio">
          <ExpandMore className="icon"/>
        </a>
      </div>
    </div>
  );
}
