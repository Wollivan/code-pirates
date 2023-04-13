import { useState } from "react";

function HornedBeast({ beast, handleModal }) {
  const [votes, setVotes] = useState(0);

  function handleVote() {
    setVotes(votes + 1);
  }

  return (
    <div className="beast">
      <h2>{beast.title}</h2>
      <p>{beast.description}</p>
      <img src={beast.image_url} alt={beast.title} onClick={handleModal} />
      <p onClick={handleVote}>Votes ❤️: {votes}</p>
    </div>
  );
}

export default HornedBeast;
