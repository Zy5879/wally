function EndGameModal(props) {
  return (
    <div className="overlay">
      <div className="modal">
        <div>
          <h1 className="text-black">You found all the characters!</h1>
          <h2>Your time was: {props.time / 1000}</h2>
        </div>
        <div>
          <h3>See where you rank amongst others</h3>
          <form onSubmit={props.create}>
            <input
              type="text"
              placeholder="Enter a username"
              name="username"
              onChange={props.handleUserName}
            />
            <button>Check Leaderboard</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EndGameModal;
