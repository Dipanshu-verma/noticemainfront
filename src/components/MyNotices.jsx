import React from 'react';

const NoticeList = ({ myNotices,setMyNotices}) => {

    
  return (
    <div>
      <h2>Notices</h2>
      <ul>
        {myNotices?.map((notice) => (
          <li key={notice._id}>
            <strong>{notice.title}</strong>
            <p>{notice.body}</p>
            <p>Category: {notice.category}</p>
            <p>Date: {new Date(notice.date).toLocaleDateString()}</p>
            <button>edit</button>
            <button>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoticeList;
