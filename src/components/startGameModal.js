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
        <p className="text-center font-bold">{data.name}</p>
      </div>
    );
  });
  return (
    <div className="overlay">
      <div className="modal">
        <h1 className="text-white text-base p-4 font-bold">
          FIND THESE CHARACTERS AS FAST AS YOU CAN! GOOD LUCK
        </h1>
        <div className="flex justify-between p-4">{characterBegin}</div>
        <div className="mt-6">
          <button
            onClick={props.closeModal}
            className="font-bold rounded-sm border-2 p-2 border-white hover:bg-white transition-all duration-500 hover:text-black"
          >
            START GAME
          </button>
        </div>
      </div>
    </div>
  );
}

export default StartGameModal;
