import wally from "../images/wally.png";
import wallyData from "../characterData";

function Main(props) {
  console.log(props);
  const styles = {
    left: props.coordinates.x + "%",
    top: props.coordinates.y + "%",
  };

  const wallyName = wallyData.map((data) => {
    return (
      <div
        className="p-3 cursor-pointer text-sm hover:text-base hover:font-bold hover:ease-in-out duration-300"
        key={data.id}
        onClick={props.boxClick}
        // onClick={() => props.boxClick(data.name)}
      >
        {data.name}
      </div>
    );
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
          className=" absolute max-w-md max-h-52 bg-gray-100 translate-translate grid rounded-md"
          style={styles}
        >
          {wallyName}
        </span>
      )}
    </main>
  );
}

export default Main;
