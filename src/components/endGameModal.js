function EndGameModal(props) {
  return (
    <div className="overlay">
      <div className="modal">
        <div>
          <h1 className="text-white font-bold">YOU FOUND ALL THE CHARCTERS!</h1>
          <h2 className="font-bold text-center">
            Your time was: {props.time / 1000}
          </h2>
        </div>
        <div>
          <h3 className="font-bold">See where you rank amongst others</h3>
          <form onSubmit={props.writeToDatabase} className="grid mt-4">
            <input
              type="text"
              placeholder="Enter a username"
              name="username"
              onChange={props.handleUserName}
              className="border rounded-sm bg-black text-white indent-2"
            />
            <button className="border p-2 font-bold rounded-sm mt-4 hover:bg-white transition-all duration-500 hover:text-black">
              CHECK LEADERBOARD
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EndGameModal;
