const Input = ({ colorValue, setColorValue }) => {
  return (
    <form onSubmit={(e) => preventDefault()}>
      <label>Add Color Name:</label>
      <input
        autoFocus
        type="text"
        placeholder="Add color name"
        value={colorValue}
        onChange={(e) => setColorValue(e.target.value)}
        required
      />
    </form>
  );
};

export default Input;
