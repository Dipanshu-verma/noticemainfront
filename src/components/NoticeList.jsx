import React from 'react';

const NoticeList = ({ notices }) => {
  return (
    <div>
      <h2>Notices</h2>
      <ul>
        {notices.map((notice) => (
          <li key={notice._id}>
            <strong>{notice.title}</strong>
            <p>{notice.body}</p>
            <p>Category: {notice.category}</p>
            <p>Date: {new Date(notice.date).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoticeList;
