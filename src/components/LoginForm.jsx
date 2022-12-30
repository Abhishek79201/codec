import React from 'react';
import { useState } from 'react';
import axios from 'axios';
const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  //

  const handleSubmit = async (e) => {
    e.preventDefault();
    const authObject = {
      'Project-ID': 'ed0949d1-023e-4b08-9c07-4c47bae9c568',
      'User-Name': username,
      'User-Secret': password,
    };
    try {
      await axios.get('https://api.chatengine.io/chats/', {
        headers: authObject,
      });
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
    } catch (error) {
      setError('Oops , incorect credentials.');
    }
  };
  //

  return (
    <div className="wrapper">
      <div className="form">
        <div className="title">Chat Application</div>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            placeholder="Username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Password"
            required
          />
          <div align="center">
            <button type="submit" className="button">
              <span> Start Chatting</span>
            </button>
          </div>
          <h2 className="error">{error}</h2>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
