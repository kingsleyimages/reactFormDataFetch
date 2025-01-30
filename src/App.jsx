import React, { useState } from 'react';
import SignUpForm from './components/SignUpForm/SignUpForm';
import Authenticate from './components/Authenticate/Authenticate';

function App() {
  // create a state variable to store the token and pass it down to the components
  const [token, setToken] = useState('null');
  return (
    <>
      {/* pass set token function to the signup form */}
      <SignUpForm setToken={setToken} />
      {/* pass token to the authenticate component */}
      <Authenticate token={token} />
    </>
  );
}

export default App;
