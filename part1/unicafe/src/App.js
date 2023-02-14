
import { useState } from "react";

const Button = ({ handleClick, name }) => (
  <button onClick={handleClick}>{name}</button>
);

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = (good - bad) / all || 0;
  const positive = ((good / all) * 100) + "%" || 0;

  if (all === 0) {
    return <div>No feedback given</div>;
  }

  return (
    <table>
      <tbody>
        <StatisticLine name="good" value={good} />
        <StatisticLine name="neutral" value={neutral} />
        <StatisticLine name="bad" value={bad} />
        <StatisticLine name="all" value={all} />
        <StatisticLine name="average" value={average} />
        <StatisticLine name="positive" value={positive} />
      </tbody>
    </table>
  );
};

const StatisticLine = ({ name, value }) => (
  <tr>
    <td>{name}</td>
    <td>{value}</td>
  </tr>
);


const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} name="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} name="neutral" />
      <Button handleClick={() => setBad(bad + 1)} name="bad" />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;