import React, { useState } from "react";

const App = () => {
  const [colorName, setColorName] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setColorName(value.toLowerCase());
  };

  return (
    <div className="App">
      <div className="box" style={{ background: colorName }}>
        App
      </div>

      <form>
        <input
          type="text"
          required
          placeholder="Insert favorite color..."
          onChange={handleChange}
        />
      </form>
      <p>{colorName}</p>
    </div>
  );
};

export default App;
