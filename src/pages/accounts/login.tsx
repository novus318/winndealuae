import Layout from '@/Components/acc/Layout';
import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${apiUrl}/api/auth/login`, {
        username,
        password,
      });

      if (response.status === 200) {
        // Save token and username in local storage
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('username', response.data.user.username);

        // Redirect to /accounts/dashboard
        window.location.href = '/accounts/dashboard';
      } else {
        // Handle errors or unsuccessful login
        setErrorMessage('Login failed. Please check your credentials.');
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Error during login:', error);
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <Layout title="WINNDEAL | Accounts">
      <div className="flex items-center justify-center h-screen bg-black text-white">
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h2 className="text-3xl font-bold mb-6 text-black">Login to Accounts</h2>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 p-3 w-full border rounded-md text-black"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-3 w-full border rounded-md text-black"
            />
          </div>
          {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
          <button
            onClick={handleLogin}
            className="bg-[#FFEE7F] text-black p-2 w-full rounded-md hover:bg-black hover:text-white focus:outline-none focus:ring focus:ring-[#FFEE7F]"
          >
            Login
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
