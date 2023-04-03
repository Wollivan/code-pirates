import Square from "./Square";

function Row({ startNum }) {
  return (
    <div className="row tim">
      <Square num={startNum} />
      <Square num={startNum + 1} />
      <Square num={startNum + 2} />
    </div>
  );
}

export default Row;
