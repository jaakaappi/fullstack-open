import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [mostVotes, setMostVotes] = useState(0);
  const [votes, setVotes] = useState(
    anecdotes.reduce((previous, _, index) => {
      return { ...previous, [index]: 0 };
    }, {})
  );

  const handleVoteButton = () => {
    const copy = { ...votes };
    copy[selected] += 1;

    let mostVotesIndex = 0;
    for (const anecdote in copy) {
      if (copy[anecdote] > copy[mostVotesIndex]) mostVotesIndex = anecdote;
    }

    setMostVotes(mostVotesIndex);
    setVotes(copy);
  };

  const handleNextButton = () => {
    const next = Math.floor(Math.random() * anecdotes.length);
    setSelected(next);
  };

  return (
    <>
      <h1>Anecdote of the day</h1>
      <div>
        <p>{props.anecdotes[selected]}</p>
        <p>Has {votes[selected] === null ? 0 : votes[selected]} votes.</p>
      </div>
      <div>
        <button onClick={handleVoteButton}>Vote</button>
        <button onClick={handleNextButton}>Next</button>
      </div>
      <h1>Anecdote with the most votes</h1>
      <p>{props.anecdotes[mostVotes]}</p>
      <p>Has {votes[mostVotes] === null ? 0 : votes[mostVotes]} votes.</p>
    </>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
