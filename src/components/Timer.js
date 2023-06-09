function Timer(props) {
  return (
    <div>
      <span className="text-white flex justify-center text-4xl mt-4">
        {("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}:
        {("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}:
        {("0" + ((props.time / 10) % 100)).slice(-2)}
      </span>
    </div>
  );
}

export default Timer;
