import { calculateInvestmentResults, formatter } from '../util/investment.js';

export default function Results({ userInput }) {
  const results = calculateInvestmentResults(userInput);
  return <table id="result">
    <thead>
      <tr>
        <th>Year</th>
        <th>Investment Value</th>
        <th>Interest (Year)</th>
        <th>Total Investment</th>
        <th>Invested Capital</th>
      </tr>
    </thead>
    <tbody>
      {results.map(result => {
        const totalInterest = result.valueEndOfYear - result.year * result.annualInvestment - (results[0].valueEndOfYear - results[0].interest - results[0].annualInvestment);

        return <tr key={result.year}>
          <td>{result.year}</td>
          <td>{formatter.format(result.valueEndOfYear)}</td>
          <td>{formatter.format(result.interest)}</td>
          <td>{formatter.format(totalInterest)}</td>
          <td>{formatter.format(result.valueEndOfYear - totalInterest)}</td>
        </tr>
      })}
    </tbody>
  </table>
}