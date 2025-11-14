import { useState } from "react";
import Square from "./components/Square";
import Input from "./components/Input";

const App = () => {
  const [colorName, setColorName] = useState("");
  const [hexValue, setHexValue] = useState("");

  // const handleChange = (e) => {
  //   e.preventDefault();
  //   const value = e.target.value;
  //   setColorName(value.toLowerCase());
  // };

  return (
    <div className="App">
      <Square colorValue={colorName} hexValue={hexValue} />
      <Input
        colorValue={colorName}
        setColorValue={setColorName}
        setHexValue={setHexValue}
      />
    </div>
  );
};

export default App;
