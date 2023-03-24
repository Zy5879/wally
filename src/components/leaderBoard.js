function LeaderBoard(props) {
  const data = props.lb;
  const sortData = data.sort(function (a, b) {
    return a.data.completed - b.data.completed;
  });

  // const board = data.map((item, index) => (
  //   <div key={index}>
  //     <div>{item.data.username}</div>
  //     <div>{item.data.completed}</div>
  //     <div>{item.data.submission}</div>
  //   </div>
  // ));
  return (
    <div className="w-full h-full grid">
      <header className="w-full bg-black p-6 ">
        <div className="flex justify-around items-center">
          <h1 className="text-white text-center text-3xl">LEADERBOARD</h1>
          <button className="text-white border p-3">Play Again</button>
        </div>
      </header>
      <main className="p-5">
        <table className="shadow-lg bg-white">
          <thead>
            <tr>
              <th className="bg-black text-white border text-left px-8 py-8">
                #
              </th>
              <th className="bg-black text-white border text-left px-8 py-8">
                Username
              </th>
              <th className="bg-black text-white border text-left px-8 py-8">
                Completed
              </th>
              <th className="bg-black border text-white text-left px-8 py-8">
                Submission
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={item.keyName}>
                  <td className="border px-8 py-4">{index}</td>
                  <td className="border px-8 py-4">{item.data.username}</td>
                  <td className="border px-8 py-4">{item.data.completed}</td>
                  <td className="border px-8 py-4">{item.data.submission}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default LeaderBoard;
