import React, { useState } from "react";

function App() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [data, setData] = useState();

  const handleInputChange1 = (e) => {
    setInput1(e.target.value);
  };

  const handleInputChange2 = (e) => {
    setInput2(e.target.value);
  };

  const handlePostRequest = () => {
    fetch("/api/history", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ input1, input2 }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  const handleGetRequest = (e) => {
    fetch("/api/" + e.currentTarget.name)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div>
        <input type="text" value={input1} onChange={handleInputChange1} />
        <input type="text" value={input2} onChange={handleInputChange2} />
        <button onClick={handlePostRequest}>Save</button>
      </div>
      <div>
        <button name="history" onClick={handleGetRequest}>
          Fetch history
        </button>
        <button name="rates" onClick={handleGetRequest}>
          Fetch rates
        </button>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
  );
}

export default App;
