import wallyData from "../characterData";
import Timer from "./Timer";

function Navbar(props) {
  const wallyMap = wallyData.map((data) => {
    return (
      <div key={data.id}>
        <img
          className="aspect-square w-20 rounded-full "
          src={data.img}
          alt={data.name}
        />
        <p
          style={{
            textDecoration: data.isClicked ? "line-through" : "none",
            color: data.isClicked ? "gray" : "white",
          }}
          className="text-white text-center font-bold"
        >
          {data.name}
        </p>
      </div>
    );
  });
  return (
    <header className="w-full bg-black">
      <nav className="flex justify-center gap-12">{wallyMap}</nav>
      <Timer time={props.time} />
    </header>
  );
}

export default Navbar;
