import React from 'react';
import ReactDOM from 'react-dom/client';
import Profile from 'components/Profile/Profile';
import user from './user.json';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Profile user={user}/>
  </React.StrictMode>
);
