import React from 'react';
import TestResult from '../../components/testresult/TestResult';
import './Results.css';

const ResultsPage = () => {
  // Sample data for demonstration
  const testResults = [
    { testId: '001', testDate: '2024-01-01' },
    { testId: '002', testDate: '2024-01-02' },
    { testId: '003', testDate: '2024-01-03' },
    { testId: '001', testDate: '2024-01-01' },
    { testId: '002', testDate: '2024-01-02' },
    { testId: '003', testDate: '2024-01-03' },
    { testId: '001', testDate: '2024-01-01' },
    { testId: '002', testDate: '2024-01-02' },
    { testId: '003', testDate: '2024-01-03' },
    // Add more test results as needed
  ];

  return (
    <div className="results-page">
      <h1>RESULTS</h1>
      <div className="results-list">
        {testResults.map((result) => (
          <TestResult key={result.testId} testId={result.testId} testDate={result.testDate} />
        ))}
      </div>
    </div>
  );
};

export default ResultsPage;
