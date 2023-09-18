import React, { useState } from 'react'

const userValues ={  
    "current-savings":'',
    "yearly-contribution":'',
    "expected-returns":'',
    "duration":''
}

const Main = (props) => {

    const [userValue, setUserValue]= useState(userValues);


    const submitHandling = (e)=>{
        e.preventDefault()
        props.onCallutaer(userValue);
     }

    const ResetHandling =()=>{
        setUserValue(userValues)
   
    }

    const InputChange = (input, value)=>{
        setUserValue((prevInput)=>{
            return{
                ...prevInput,
                [input]: +value,
            }
        })
    }
  return (
    <div>   
        <form className="form" onSubmit={submitHandling}>
            <div className="input-group">
            <p>
                <label htmlFor="current-savings">Current Savings ($)</label>
                <input 
                    type="number" 
                    id="current-savings" 
                    value={userValue['current-savings']}
                    onChange={(e)=>InputChange('current-savings', e.target.value)}
                />
            </p>
            <p>
                <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                <input 
                    type="number"
                    id="yearly-contribution" 
                    value={userValue['yearly-contribution']}
                    onChange={(e)=>InputChange('yearly-contribution', e.target.value)}
                 />
            </p>
            </div>
            <div className="input-group">
            <p>
                <label htmlFor="expected-returns">
                Expected Interest (%, per year)
                </label>
                <input 
                    type="number" 
                    id="expected-return" 
                    value={userValue['expected-returns']}
                    onChange={(e)=>InputChange('expected-returns', e.target.value)}
    
                />
            </p>
            <p>
                <label htmlFor="duration">Investment Duration (years)</label>
                <input 
                    type="number"
                     id="duration" 
                    value={userValue['duration']}
                    onChange={(e)=>InputChange('duration', e.target.value)}

                />
            </p>
            </div>
            <p className="actions">
            <button type="reset" className="buttonAlt" onClick={ResetHandling}>
                Reset
            </button>
            <button type="submit" className="button">
                Calculate
            </button>
            </p>
        </form>
  </div>
  )
}

export default Main