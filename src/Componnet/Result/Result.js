import React from 'react'


const formatting = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits:2,
    maximumFractionDigits:2
})

const Result = (props) => {
    const formating ={}
  return (
    <div>
        <table className="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Total Savings</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
              {props.data.map((values) => (
                    <tr key={values.year}>
                        <td>{values.year}</td>
                        <td>{formatting.format(values.savingsEndOfYear)}</td>
                        <td>{formatting.format(values.yearlyInterest)}</td>
                        <td>{formatting.format(values.savingsEndOfYear - props.initialInvestment - values.yearlyContribution * values.year)}</td>
                        <td>{formatting.format(values.yearlyInterest + values.yearlyContribution * values.year)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
  </div>
  )
}

export default Result