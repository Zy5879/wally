import Navbar from "./components/Navbar";
import Main from "./components/Main";
import "./index.css";
import { useState } from "react";
import { db } from "./firebase";

function App() {
  const [coordinates, setCoordinates] = useState([]);

  // const [originalCoordinates, setOriginalCoordinates] = useState(characterData);

  // function writeToDatabase() {
  //   const nan = nanoid();
  //   set(ref(db, `/${nan}`), {
  //     originalCoordinates,
  //   });
  // }
  // const callBackRef = useCallback(domNode => {
  //   if()
  // })
  function imageClick(e) {
    let elem = e.target;
    let rect = elem.getBoundingClientRect();
    let xc = ((e.clientX - rect.left) / (rect.right - rect.left)) * 100;
    let yc = ((e.clientY - rect.top) / (rect.bottom - rect.top)) * 100;

    setCoordinates({ x: xc, y: yc });
  }

  return (
    <div className="w-full h-full">
      <Navbar />
      <Main coordinates={coordinates} imageClick={imageClick} />
    </div>
  );
}

export default App;
