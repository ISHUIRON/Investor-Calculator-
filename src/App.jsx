import { useState } from "react";
import Results from "./components/Results";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 15000,
    expectedReturn: 20000,
    duration: 2,
  });
  const  inputIsValid=userInput.duration >=1;
  function handleChange(inputIdentifier, newValue) {
    //To handle the specific input change by updating object with newValue.
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [inputIdentifier]: +newValue, // newValue comes from input type on change and inputIdentifier we will set.
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput}/>
      {!inputIsValid && <p className="center">Please Enter duration value greater than zero.</p>}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
