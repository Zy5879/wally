import Navbar from "./components/Navbar";
import Main from "./components/Main";
import StartGameModal from "./components/startGameModal";
import "./index.css";
import "./style.css";
import characters from "./characterData";
import { useState, useEffect } from "react";
import { app } from "./firebase";
import { getDatabase, ref, child, get, onValue } from "firebase/database";

function App() {
  const [coordinates, setCoordinates] = useState([]);
  const [characterData, setCharacterData] = useState(characters);
  const [wally, setWally] = useState(false);
  const [time, setTime] = useState(0);
  const [timerOn, setTimeOn] = useState(false);
  const [modal, setModal] = useState(true);

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  function getData() {
    return new Promise((resolve, reject) => {
      let map = new Map();
      const db = getDatabase(app);
      const dbRef = ref(db, "coordinates");

      onValue(dbRef, (snapshot) => {
        snapshot.forEach(function (snap) {
          map.set(snap.key, snap.val());
          resolve(map);
        });
      });
    });
  }

  function closeModal() {
    setModal(false);
    setTimeOn(true);
  }

  function checkName(name) {
    return name;
  }

  function checkValidation(character) {
    let holdData = [];
    getData()
      .then((value) => {
        value.forEach((item) => {
          holdData.push(item);
        });
      })
      .then(() => {
        console.log(coordinates);
        if (
          coordinates.x >= 11 &&
          coordinates.x <= 24 &&
          coordinates.y >= 14.9 &&
          coordinates.y <= 30 &&
          holdData[2].name.toString() === character
        ) {
          setCharacterData((prevData) =>
            prevData.map((data) => {
              return data.name === character
                ? { ...data, isClicked: (data.isClicked = true) }
                : data;
            })
          );
          console.log(character);
        } else if (
          coordinates.x >= 80 &&
          coordinates.x <= 85 &&
          coordinates.y >= 30 &&
          coordinates.y <= 37.5 &&
          holdData[1].name.toString() === character
        ) {
          setCharacterData((prevData) =>
            prevData.map((data) => {
              return data.name === character
                ? { ...data, isClicked: (data.isClicked = true) }
                : data;
            })
          );
          console.log(character);
        } else if (
          coordinates.x >= 27 &&
          coordinates.x <= 30.5 &&
          coordinates.y >= 39 &&
          coordinates.y <= 43 &&
          holdData[0].name.toString === character
        ) {
          setCharacterData((prevData) =>
            prevData.map((data) => {
              return data.name === character
                ? { ...data, isClicked: (data.isClicked = true) }
                : data;
            })
          );
          console.log(character);
        } else {
          console.log("No character found");
        }
      });
  }

  function imageClick(e) {
    let elem = e.target;
    let rect = elem.getBoundingClientRect();
    let xc = ((e.clientX - rect.left) / (rect.right - rect.left)) * 100;
    let yc = ((e.clientY - rect.top) / (rect.bottom - rect.top)) * 100;
    setCoordinates({ x: xc, y: yc });

    // console.log(xc, yc);
  }

  return (
    <div className="w-full h-full">
      <Navbar time={time} />
      <Main
        coordinates={coordinates}
        imageClick={imageClick}
        checkName={checkName}
        checkValidation={checkValidation}
        modal={modal}
        closeModal={closeModal}
      />
      {modal && <StartGameModal modal={modal} closeModal={closeModal} />}
    </div>
  );
}

export default App;
