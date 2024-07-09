import React, { useState } from 'react';

function QuizSubmission({ submitAnswers }) {
  const [answers, setAnswers] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    submitAnswers(answers);
  };

  return (
    <div className="quiz-submission">
      <h2>Submit Answers</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Your Answers"
          value={answers}
          onChange={(e) => setAnswers(e.target.value)}
        />
        <button type="submit">Submit Answers</button>
      </form>
    </div>
  );
}

export default QuizSubmission;
