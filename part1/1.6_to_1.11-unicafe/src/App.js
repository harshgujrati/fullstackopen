import { useState } from 'react'

const Button = ({onclick, text}) => {
  return(
    <button onClick={onclick}>{text}</button>
  )  
}

const StatisticsLine = ({text, value}) => {
  return(
    <>
      <tr>
        <td>{text} </td> 
        <td>{value}</td>
      </tr>
    </>   
  )  
}

const Statistics = ({good, neutral, bad}) => {
  if(good !==0 || neutral !==0 || bad !== 0){
    return(
      <table>
        <tbody>
          <StatisticsLine text='Good' value={good} />
          <StatisticsLine text='Neutral' value={neutral} />
          <StatisticsLine text='Bad' value={bad} />
          <StatisticsLine text='All' value={good+neutral+bad} />
          <StatisticsLine text='Average' value={(good-bad)/(good+neutral+bad)} />
          <StatisticsLine text='Positive' value={(good/(good+neutral+bad))*100} />
        </tbody>
      </table>
    )
  }
  else{
    return(
      <div>No feedback given</div>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onclick={ () => setGood(good+1)} text='good' />
      <Button onclick={ () => setNeutral(neutral+1)} text='neutral' />
      <Button onclick={ () => setBad(bad+1)} text='bad' />
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App