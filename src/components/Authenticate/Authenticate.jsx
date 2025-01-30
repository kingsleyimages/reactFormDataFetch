import axios from 'axios';
import React, { useState } from 'react';

function Authenticate({ token }) {
  const [error, setError] = useState(null);
  // use authorized as boolean to check if the user is authorized or not
  const [authorized, setAuthorized] = useState(null);
  const [username, setUsername] = useState('');

  async function handleAuth() {
    try {
      const data = await axios.get(
        'https://fsa-jwt-practice.herokuapp.com/authenticate',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(data.data.data.username);
      // if the success message is true set the authorized state variable to true else set it to false
      // if success is null no message displays
      setUsername(data.data.data.username);

      if (data.data.success) {
        setAuthorized(true);
      } else {
        setAuthorized(false);
      }
      if (data.data.message == 'jwt malformed') {
        // force a manual error
        throw new Error('Invalid token');
      }
    } catch (err) {
      setError(err.message);
    }
  }
  return (
    <>
      <h2>Authenticate</h2>
      {/* output message after authentication */}
      {authorized ? (
        <p style={{ color: 'green' }}>
          Welcome {username}! You are authorized to use the application.
        </p>
      ) : (
        authorized === false && (
          <p style={{ color: 'red' }}>
            You are not authorized to use the application.
          </p>
        )
      )}

      {error && (
        <p style={{ color: 'red' }}>
          Error Authenticating your credentials. {error}
        </p>
      )}

      <button onClick={handleAuth}>Authenticate Token</button>
    </>
  );
}

export default Authenticate;
