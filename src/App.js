import RouteProvider from "./routes/Routes";
import "./index.css";
import "./style.css";
import characters from "./characterData";
import { useState, useEffect } from "react";
import { app } from "./firebase";
import { db } from "./firebase";
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, push, onValue, set } from "firebase/database";

function App() {
  const [coordinates, setCoordinates] = useState([]);
  const [lb, setLb] = useState([]);
  const [time, setTime] = useState(0);
  const [characterData, setCharacterData] = useState(characters);
  const [username, setUserName] = useState("");
  const [timerOn, setTimeOn] = useState(false);
  const [modal, setModal] = useState(true);
  const [endModal, setEndModal] = useState(false);
  const [options, setOptions] = useState(false);

  const navigate = useNavigate();

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

  useEffect(() => {
    setLb([]);
    const allFound = characterData.every((data) => data.isClicked);
    if (allFound) {
      setEndModal(true);
      setTimeOn(false);
    }
  }, [characterData]);

  useEffect(() => {
    onValue(ref(db, "leaderboard/"), (snapshot) => {
      let records = [];
      snapshot.forEach((snap) => {
        let keyName = snap.key;
        let data = snap.val();
        records.push({ keyName, data: data });
      });
      setLb(records);
    });
  }, []);

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
          holdData[0].name.toString() === character
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
    setOptions(false);
  }

  function imageClick(e) {
    let elem = e.target;
    let rect = elem.getBoundingClientRect();
    let xc = ((e.clientX - rect.left) / (rect.right - rect.left)) * 100;
    let yc = ((e.clientY - rect.top) / (rect.bottom - rect.top)) * 100;
    setCoordinates({ x: xc, y: yc });
    setOptions(true);

    // console.log(xc, yc);
  }

  function handleUserName(e) {
    setUserName(e.target.value);
  }

  function writeToDatabase(e) {
    const completed = time / 1000;
    const submission = new Date().toLocaleDateString();
    e.preventDefault();
    const currentRef = ref(db, "leaderboard");
    const addNewRef = push(currentRef);
    set(addNewRef, {
      username,
      completed,
      submission,
    });
    setUserName("");
    setTime(0);
    console.log("sent to database");
    navigate("/leaderboard");
  }

  function restartGame() {
    navigate("/");
    window.location.reload();
  }

  return (
    <RouteProvider
      coordinates={coordinates}
      imageClick={imageClick}
      checkName={checkName}
      checkValidation={checkValidation}
      modal={modal}
      closeModal={closeModal}
      endModal={endModal}
      time={time}
      handleUserName={handleUserName}
      writeToDatabase={writeToDatabase}
      lb={lb}
      options={options}
      restartGame={restartGame}
    />
  );
}

export default App;
