import Row from "./Row";

function Grid() {
  return (
    <div className="grid">
      <Row startNum={1} />
      <Row startNum={4} />
      <Row startNum={7} />
    </div>
  );
}

export default Grid;
