import wally from "../images/wally.png";

function Main(props) {
  console.log(props.coordinates);

  const styles = {
    left: props.coordinates.x,
    top: props.coordinates.y,
  };

  return (
    <main>
      <img
        className="w-full h-full"
        src={wally}
        onClick={props.imageClick}
        alt="wally-board"
      ></img>
      <div
        className="absolute w-20 h-20 bg-red-500 translate-translate"
        style={styles}
      ></div>
    </main>
  );
}

export default Main;
