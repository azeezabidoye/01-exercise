import { useState } from "react";
import Square from "./components/Square";
import Input from "./components/Input";

const App = () => {
  const [colorName, setColorName] = useState("Empty value");

  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setColorName(value.toLowerCase());
  };

  return (
    <div className="App">
      <Square colorValue={colorName} />
      <Input colorValue={colorName} setColorValue={setColorName} />
    </div>
  );
};

export default App;
