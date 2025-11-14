const Square = ({ colorValue, hexValue }) => {
  return (
    <section className="square" style={{ background: colorValue }}>
      <p>{colorValue ? colorValue : "Empty Value"}</p>
      <p>{hexValue ? hexValue : null}</p>
    </section>
  );
};

export default Square;
