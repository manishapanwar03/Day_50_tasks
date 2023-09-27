import React, { useState } from 'react';
import './Passowrd.css';

const Passowrd_strength_background = () => {
  const [password, setPassword] = useState('');
  const [blurValue, setBlurValue] = useState(20);
  const [submittedPassword, setSubmittedPassword] = useState('');

  const handlePasswordChange = (e) => {
    const input = e.target.value;
    const length = input.length;
    const newBlurValue = 20 - length * 2;
    setBlurValue(newBlurValue);
    setPassword(input); 
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setSubmittedPassword(password); 
   
  };

  return (
    <>
      <div className="background" style={{ filter: `blur(${blurValue}px)` }}></div>
      <div className="bg-white rounded p-10 text-center shadow-md">
        <h1 className="text-3xl">Image Password Strength</h1>
        <p className="text-sm text-gray-700">Change the password to see the effect</p>
        <form onSubmit={handleSubmit}>
          <div className="my-4 text-left">
            <label htmlFor="email" className="text-gray-900">
              Email:
            </label>
            <input
              type="text"
              className="border block w-full p-2 mt-2 rounded"
              id="email"
              placeholder="Enter Email"
            />
          </div>

          <div className="my-4 text-left">
            <label htmlFor="password" className="text-gray-900">
              Password:
            </label>
            <input
              type="password"
              className="border block w-full p-2 mt-2 rounded"
              id="password"
              placeholder="Enter Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>

          <button className="bg-black text-white py-2 mt-4 inline-block w-full rounded" type="submit">
            Submit
          </button>
        </form>
        <p className="mt-4">Submitted Password: {submittedPassword}</p>
      </div>
    </>
  );
};

export default Passowrd_strength_background;
