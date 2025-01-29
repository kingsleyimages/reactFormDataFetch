import React, { useState } from 'react';
import SignUpForm from './components/SignUpForm/SignUpForm';
import Authenticate from './components/Authenticate/Authenticate';

function App() {
  // create a state variable to store the token and pass it down to the components
  const [token, setToken] = useState('null');
  return (
    <>
      <SignUpForm setToken={setToken} token={token} />
      <Authenticate setToken={setToken} token={token} />
    </>
  );
}

export default App;
