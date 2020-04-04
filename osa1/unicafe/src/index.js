import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = all / 3;
  let positive = good / all;
  if (isNaN(positive)) positive = 0;

  if (good !== 0 || neutral !== 0 || bad !== 0) {
    return (
      <div>
        <h2>Statistics</h2>
        <table>
          <tbody>
            <StatisticsLine text={"Good"} value={good} />
            <StatisticsLine text={"Neutral"} value={neutral} />
            <StatisticsLine text={"Bad"} value={bad} />
            <StatisticsLine text={"All"} value={all} />
            <StatisticsLine text={"Average"} value={average} />
            <StatisticsLine text={"Positive"} value={`${positive}%`} />
          </tbody>
        </table>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Statistics</h2>
        <p>No feedback given</p>
      </div>
    );
  }
};

const StatisticsLine = ({ value, text }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodButtonClick = () => {
    setGood(good + 1);
  };

  const handleNeutralButtonClick = () => {
    setNeutral(neutral + 1);
  };

  const handleBadButtonClick = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>Give feedback</h1>
      <div>
        <Button text={"Good"} onClick={handleGoodButtonClick} />
        <Button text={"Neutral"} onClick={handleNeutralButtonClick} />
        <Button text={"Bad"} onClick={handleBadButtonClick} />
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
