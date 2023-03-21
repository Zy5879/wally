import Navbar from "./components/Navbar";
import Main from "./components/Main";
import "./index.css";
import { useState } from "react";
import { app } from "./firebase";
import { getDatabase, ref, child, get, onValue } from "firebase/database";

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

  function boxClick() {
    const db = getDatabase(app);
    const dbRef = ref(db, "coordinates");

    onValue(dbRef, (snapshot) => {
      snapshot.forEach((snap) => {
        const childData = snap.val();
        console.log(childData);
      });
    });

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
        boxClick={boxClick}
      />
    </div>
  );
}

export default App;
