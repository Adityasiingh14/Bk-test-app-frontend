import React from 'react';
import './TestResult.css';

const TestResult = ({ testId, testDate }) => {
  return (
    <div className="test-result">
      <div className="test-info">
        <span>Test ID: {testId}</span>
        <span>Date: {testDate}</span>
      </div>
      <button className="result-button">View Result</button>
    </div>
  );
};

export default TestResult;
