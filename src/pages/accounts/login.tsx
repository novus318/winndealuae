import Layout from '@/Components/acc/Layout';
import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your login logic here
    console.log(`Logging in with Username: ${username} and Password: ${password}`);
  };

  return (
    <Layout

    title="WINNDEAL | Accounts"
 >
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
