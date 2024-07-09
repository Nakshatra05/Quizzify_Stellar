import React, { useState } from 'react';

function QuizCreation({ createQuiz }) {
  const [content, setContent] = useState('');
  const [rewardAmount, setRewardAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    createQuiz(content, rewardAmount);
  };

  return (
    <div className="quiz-creation">
      <h2>Create Quiz</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Quiz Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <input
          type="number"
          placeholder="Reward Amount"
          value={rewardAmount}
          onChange={(e) => setRewardAmount(e.target.value)}
        />
        <button type="submit">Create Quiz</button>
      </form>
    </div>
  );
}

export default QuizCreation;
