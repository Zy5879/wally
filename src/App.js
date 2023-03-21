import Navbar from "./components/Navbar";
import Main from "./components/Main";
import "./index.css";
import characters from "./characterData";
import { useState } from "react";
import { app } from "./firebase";
import { getDatabase, ref, child, get, onValue } from "firebase/database";

function App() {
  const [coordinates, setCoordinates] = useState([]);
  const [characterData, setCharacterData] = useState(characters);

  // console.log(characterData);
  function getData() {
    return new Promise((resolve, reject) => {
      let map = new Map();
      const db = getDatabase(app);
      const dbRef = ref(db, "coordinates");

      onValue(dbRef, (snapshot) => {
        snapshot.forEach(function (snap) {
          // console.log(snap.key + ": " + snap.val());
          map.set(snap.key, snap.val());
          resolve(map);
        });
      });
    });
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
          // console.log(characterData);
          // console.log([holdData[2].name].toString() === character);
        } else {
          console.log("false");
        }

        // console.log(coordinates.x - 5, coordinates.y);
        // if (
        //   holdData[2].x >= coordinates.x &&
        //   holdData[2].x <= 24 &&
        //   holdData[2].y >= coordinates.y &&
        //   holdData[2].y <= 30
        // ) {
        //   console.log("true");
        // } else {
        //   console.log("false");
        // }
      });
    // console.log(holdData[0]);
    // console.log("hey");
  }

  // getData().then((value) => {
  //   value.forEach((item) => {
  //     holdData.push(item);
  //     console.log(holdData[0]);
  //   });
  // });

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

    console.log(xc, yc);
  }

  function boxClick() {
    // const db = getDatabase(app);
    // const dbRef = ref(db, "coordinates");
    // onValue(dbRef, (snapshot) => {
    //   snapshot.forEach((snap) => {
    //     const childData = snap.val();
    //     console.log(snap.key);
    //   });
    // });
    // console.log("hi");
    // onValue(dbRef, (snapshot) => {
    //   snapshot.forEach((snap) => {
    //     const childKey = snap.key;
    //     const childData = snap.val();
    //     console.log(childData);
    //   });
    // });
    // const dbRef = ref("coordiantes/");
    // onValue(dbRef, (snapshot) => {
    //   snapshot.forEach((dbRef,childSnapshot) => {
    //     const childKey = childSnapshot.key;
    //     const childData = childSnapshot.val();
    //     console.log(childData);
    //   });
    // });
    // const database = db;
    // const coord_ref = ref(getDatabase());
    // get(coord_ref, "coordinates/", "-NR-XK5NWJB3X0v6mU19")
    //   .then((snapshot) => {
    //     if (snapshot) {
    //       snapshot.forEach(function (childShot) {
    //         const data = childShot.val();
    //         holdDb.push(data);
    //       });
    //     }
    //     holdDb.map((item) => {});
    // if (snapshot.exists()) {
    //   let data = snapshot.val();
    //   console.log(data);
    // } else {
    //   console.log("No data available");
    // }
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
    // let holdValue = [];
    // get(coord_ref, "coordinates/")
    //   .then((snapshot) => {
    //     if (snapshot.exists()) {
    //      const data = snapshot.val();
    //       });
    //     } else {
    //       console.log("No data available");
    //     }
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  }

  return (
    <div className="w-full h-full">
      <Navbar />
      <Main
        coordinates={coordinates}
        imageClick={imageClick}
        checkName={checkName}
        checkValidation={checkValidation}
      />
    </div>
  );
}

export default App;
