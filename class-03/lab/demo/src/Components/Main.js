import HornedBeast from "./HornedBeast";
import beastData from "../data.json";

function Main() {
  return (
    <main className="beasts">
      {beastData.map((beast) => {
        return <HornedBeast beast={beast} />;
      })}
      {/* <HornedBeast title="Tim's Dragon" imageUrl={petesDragon} description="Alive." /> */}
    </main>
  );
}

export default Main;
