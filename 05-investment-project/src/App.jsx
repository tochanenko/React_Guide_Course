import Header from './components/Header.jsx';
import Results from './components/Results.jsx';
import UserInput from './components/UserInput.jsx';
import { useState } from 'react';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevInput => ({
      ...prevInput,
      [inputIdentifier]: +newValue
    }));
  }

  const isUserInputValid = userInput && userInput.duration > 0

  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      {isUserInputValid ? <Results userInput={userInput}/> : <p className="center">Please enter duration greater than zero.</p>}
    </>
  )
}

export default App;
