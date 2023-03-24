import { Route, Routes } from "react-router-dom";
import Game from "../components/Game";
import LeaderBoard from "../components/leaderBoard";

function RouteProvider(props) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Game
            coordinates={props.coordinates}
            imageClick={props.imageClick}
            checkName={props.checkName}
            checkValidation={props.checkValidation}
            modal={props.modal}
            endModal={props.endModal}
            closeModal={props.closeModal}
            time={props.time}
            handleUserName={props.handleUserName}
            writeToDatabase={props.writeToDatabase}
            options={props.options}
          />
        }
      ></Route>
      <Route
        path="/leaderboard"
        element={<LeaderBoard lb={props.lb} restartGame={props.restartGame} />}
      ></Route>
    </Routes>
  );
}

export default RouteProvider;
