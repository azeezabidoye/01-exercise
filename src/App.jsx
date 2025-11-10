import React, { useState } from "react";

const App = () => {
  const [colorName, setColorName] = useState("Empty value");

  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setColorName(value.toLowerCase());
  };

  return (
    <div className="App">
      <div className="box" style={{ background: colorName }}>
        {colorName}
      </div>

      <form>
        <input
          autoFocus
          type="text"
          required
          placeholder="Add color name..."
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default App;
