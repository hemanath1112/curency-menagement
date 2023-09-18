
import Header from './Componnet/Header/Header';
import Main from "./Componnet/Main/Main"
import Result from './Componnet/Result/Result';
import { useState } from 'react';



function App() {
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };
   

    const yearlyData = []; 
    if(userInput){
        let currentSavings = userInput['current-savings']; 
        const yearlyContribution = userInput['yearly-contribution']; 
        const expectedReturn= userInput["expected-returns"]/100; 
        const duration = userInput['duration'];


        for (let i = 0; i < duration; i++) {
          const yearlyInterest = currentSavings * expectedReturn;
          currentSavings = yearlyInterest + yearlyContribution;
          yearlyData.push({
            year: i + 1,
            yearlyInterest: yearlyInterest,
            savingsEndOfYear: currentSavings,
            yearlyContribution: yearlyContribution,
          });
        }

   
  };

  return (
    <div>
      <Header/>
      <Main  onCallutaer={calculateHandler}/>
      {!userInput && <p>this no inverstment data !!</p>}
      {userInput && <Result data={yearlyData} initialInvestment = {userInput["current-savings"]} />}
      
    </div>
  );
}

export default App;
