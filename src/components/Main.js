import wally from "../images/wally.png";
import wallyData from "../characterData";

function Main(props) {
  //   console.log(props.coordinates);
  const styles = {
    left: props.coordinates.x + "%",
    top: props.coordinates.y + "%",
  };

  const wallyName = wallyData.map((data) => {
    return <div key={data.id}>{data.name}</div>;
  });

  return (
    <main className="relative w-full h-full sm:w-full sm:h-full">
      <img
        className="w-full h-screen"
        src={wally}
        onMouseDown={props.imageClick}
        alt="wally-board"
      ></img>
      {props.coordinates.length === 0 ? (
        ""
      ) : (
        <span
          className=" absolute w-45 h-45 bg-white translate-translate"
          style={styles}
        >
          {wallyName}
        </span>
      )}
    </main>
  );
}

export default Main;
