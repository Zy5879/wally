import Navbar from "./components/Navbar";
import Main from "./components/Main";
import "./index.css";
import { useEffect, useState } from "react";

function App() {
  const [coordinates, setCoordinates] = useState([]);

  function imageClick({ pageX, pageY }) {
    setCoordinates({ x: pageX, y: pageY });
  }

  // useEffect(() => {
  //   function windowClick({ pageX, pageY }) {
  //     setCoordinates({ x: pageX, y: pageY });
  //     return (
  //       <div className="w-full h-screen">
  //         <div
  //           className="absolute w-25 h-25 translate-translate bg-red-500"
  //           style={{ left: coordinates.x, top: coordinates.y }}
  //         ></div>
  //       </div>
  //     );
  //   }

  //   window.addEventListener("click", windowClick);

  //   return () => {
  //     window.removeEventListener("click", windowClick);
  //   };
  // }, [coordinates]);
  return (
    <div>
      <Navbar />
      <Main coordinates={coordinates} imageClick={imageClick} />
    </div>
  );
}

export default App;
