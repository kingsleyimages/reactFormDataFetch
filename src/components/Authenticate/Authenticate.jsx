import axios from 'axios';
import React, { useState } from 'react';

function Authenticate({ token }) {
  const [error, setError] = useState(null);
  const [authorized, setAuthorized] = useState(null);

  async function handleAuth() {
    try {
      const data = await axios.get(
        'https://fsa-jwt-practice.herokuapp.com/authenticate',
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(data);
      setAuthorized(data.data.message);
    } catch (err) {
      setError(err.message);
      console.log('Authentication failed', err);
    }
    console.log('Authentication Successful', authorized);
  }
  return (
    <>
      <h2>Authenticate</h2>
      {authorized && <p>{authorized}</p>}
      {error?.message && <p style={{ color: 'red' }}>Error Signing Up</p>}
      <button onClick={handleAuth}>Authenticate Token</button>
    </>
  );
}

export default Authenticate;
