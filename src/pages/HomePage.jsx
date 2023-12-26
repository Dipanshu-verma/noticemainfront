import React, { useState, useEffect } from 'react';
import NoticeList from '../components/NoticeList';

const HomePage = ({ user, onLogout }) => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    // Fetch notices logic (use API calls or dummy data)
  }, []);

  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
      <button onClick={onLogout}>Logout</button>
      <NoticeList notices={notices} />
    </div>
  );
};

export default HomePage;
