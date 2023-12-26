import React, { useState, useEffect } from 'react';
import MyNotices from '../components/MyNotices';

const MyNoticesPage = ({ user }) => {
  const [myNotices, setMyNotices] = useState([]);

  useEffect(() => {
    // Fetch user's notices logic (use API calls or dummy data)
  }, []);

  return (
    <div>
      <h1>My Notices</h1>
      <MyNotices myNotices={myNotices} />
    </div>
  );
};

export default MyNoticesPage;
