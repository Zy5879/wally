import wallyData from "../characterData";

function Navbar() {
  const wallyMap = wallyData.map((data) => {
    return (
      <div key={data.id}>
        <img
          className="aspect-square w-20 rounded-full "
          src={data.img}
          alt={data.name}
        />
        <p className="text-white text-center">{data.name}</p>
      </div>
    );
  });
  return (
    <header className="w-full bg-black">
      <nav className="flex justify-center gap-12">{wallyMap}</nav>
    </header>
  );
}

export default Navbar;
