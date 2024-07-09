import React, { useState } from 'react';

function UserManagement({ registerUser, getUserBalance }) {
  const [userAddress, setUserAddress] = useState('');
  const [balance, setBalance] = useState(null);

  const handleRegister = () => {
    registerUser(userAddress);
  };

  const handleCheckBalance = async () => {
    const userBalance = await getUserBalance(userAddress);
    setBalance(userBalance);
  };

  return (
    <div className="user-management">
      <h2>User Management</h2>
      <input
        type="text"
        placeholder="User Address"
        value={userAddress}
        onChange={(e) => setUserAddress(e.target.value)}
      />
      <button onClick={handleRegister}>Register User</button>
      <button onClick={handleCheckBalance}>Check Balance</button>
      {balance !== null && <p>Balance: {balance}</p>}
    </div>
  );
}

export default UserManagement;
