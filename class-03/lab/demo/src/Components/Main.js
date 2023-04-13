import HornedBeast from "./HornedBeast";
import beastData from "../data.json";

function Main({ handleModal }) {
  return (
    <main className="beasts">
      {beastData.map(function (beast) {
        return <HornedBeast beast={beast} handleModal={handleModal} />;
      })}
    </main>
  );
}

export default Main;
