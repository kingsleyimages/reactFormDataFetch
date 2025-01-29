import React, { useState } from 'react';
import axios from 'axios';
import Authenticate from '../Authenticate/Authenticate';

function SignUpForm(setToken) {
  // create state variables for input fields with initial state of empty strings
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  console.log(username, password);

  // create a function to handle the form submission
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      // use axios for post request to server passign the object variable with username and password
      const data = await axios.post(
        'https://fsa-jwt-practice.herokuapp.com/signup',
        {
          username,
          password,
        }
      );
      // store token in state variable from App.jsx
      setToken = data.data.token;
      console.log(data.data);
    } catch (err) {
      setError(err.message);
    }
    setUsername('');
    setPassword('');
    setError(null);
  }

  return (
    <>
      <h2>Signup</h2>
      {/* // output server error message */}
      {error?.message && <p style={{ color: 'red' }}>Error Signing Up</p>}
      {/* render form */}
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username:</p>
          <input
            type="text"
            // when the input field changes, update the state variable
            onChange={(e) => setUsername(e.target.value)}
            // set the value of the input field to the state variable controlled input because your setting it to what was captured in the state variable
            value={username}></input>
        </label>
        <label>
          <p>Password:</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}></input>
        </label>
        <button type="submit" style={{ display: 'block' }}>
          Submit
        </button>
      </form>
    </>
  );
}
export default SignUpForm;
