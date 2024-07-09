import React, { useState } from 'react';

function FundManagement({ fundQuiz, withdrawFunds }) {
  const [orgAddress, setOrgAddress] = useState('');
  const [amount, setAmount] = useState('');

  const handleFund = () => {
    fundQuiz(orgAddress, amount);
  };

  const handleWithdraw = () => {
    withdrawFunds(orgAddress, amount);
  };

  return (
    <div className="fund-management">
      <h2>Fund Management</h2>
      <input
        type="text"
        placeholder="Organization Address"
        value={orgAddress}
        onChange={(e) => setOrgAddress(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleFund}>Fund Quiz</button>
      <button onClick={handleWithdraw}>Withdraw Funds</button>
    </div>
  );
}

export default FundManagement;
