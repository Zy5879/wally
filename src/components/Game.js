import Main from "./Main";
import StartGameModal from "./startGameModal";
import EndGameModal from "./endGameModal";

function Game(props) {
  return (
    <div>
      <Main
        coordinates={props.coordinates}
        imageClick={props.imageClick}
        checkName={props.checkName}
        checkValidation={props.checkValidation}
        time={props.time}
        options={props.options}
      />
      {props.modal && (
        <StartGameModal modal={props.modal} closeModal={props.closeModal} />
      )}
      {props.endModal && (
        <EndGameModal
          endModal={props.endModal}
          time={props.time}
          handleUserName={props.handleUserName}
          writeToDatabase={props.writeToDatabase}
        />
      )}
    </div>
  );
}

export default Game;
