import characterData from "../characterData";

function StartGameModal(props) {
  const characterBegin = characterData.map((data) => {
    return (
      <div key={data.id}>
        <img
          className="aspect-square w-20 rounded-full "
          src={data.img}
          alt={data.name}
        />
        <p>{data.name}</p>
      </div>
    );
  });
  return (
    <div className="overlay">
      <div className="modal">
        <h1 className="text-black">
          Find these Characters as fast as you can! Good Luck
        </h1>
        <div className="flex justify-between">{characterBegin}</div>
        <div>
          <button
            onClick={props.closeModal}
            className="border-2 p-2 border-sky-800"
          >
            Start Game
          </button>
        </div>
      </div>
    </div>
  );
}

export default StartGameModal;
