import React, { useState, useEffect } from 'react';
 
import axios from 'axios';

const headers = {
    'Content-Type': 'application/json',  
    'authorization': JSON.parse(localStorage.getItem("jwt_token"))||null, 
    
  };

const MyNoticesPage = () => {
  const [myNotices, setMyNotices] = useState([]);
  const [editMode, setEditMode] = useState(null);
  const [editedNotice, setEditedNotice] = useState({ title: '', body: '', category: '' });

  useEffect(() => {
   
    fatchNotices();
  }, []);

  async function fatchNotices(){
    const user = JSON.parse(localStorage.getItem("user"))||null;
 
    try{
        const data =  await axios.get(`https://notice-back-8mgu.onrender.com/notice/${user._id}`,{headers});
         
        setMyNotices(data.data)
    
    }catch(error){
        console.log("something went wrong");
    }
         
    }
   
  
    const handleEdit = (noticeId) => {
      
      const noticeToEdit = myNotices.find((notice) => notice._id === noticeId);
      setEditMode(noticeId);
      setEditedNotice({ title: noticeToEdit.title, body: noticeToEdit.body, category: noticeToEdit.category });
    };
  
    const handleEditCancel = () => {
      
      setEditMode(null);
      setEditedNotice({ title: '', body: '', category: '' });
    };
  
    const handleEditSave = async (noticeId) => {
      try {
        
        await axios.put(`https://notice-back-8mgu.onrender.com/notice/${noticeId}`, editedNotice, {
          headers
        });
  
       
        setMyNotices((prevNotices) =>
          prevNotices.map((notice) =>
            notice._id === noticeId ? { ...notice, ...editedNotice } : notice
          )
        );
  
        
        setEditMode(null);
        setEditedNotice({ title: '', body: '', category: '' });
  
        console.log(`Edited notice with ID: ${noticeId}`);
      } catch (error) {
        console.error('Error editing notice:', error);
      }
    };
  
    const handleChange = (e) => {
      setEditedNotice({
        ...editedNotice,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleDelete = async (noticeId) => {
      
      try {
   
        await axios.delete(`https://notice-back-8mgu.onrender.com/notice/${noticeId}`, {
          headers
        });
  
        
        setMyNotices((prevNotices) => prevNotices.filter((notice) => notice._id !== noticeId));
        console.log(`Deleted notice with ID: ${noticeId}`);
      } catch (error) {
        console.error('Error deleting notice:', error);
      }
    };
  


  return (
    <div>
      <h1>My Notices</h1>
      <div>
      <h2>Notices</h2>
      <ul>
        {myNotices?.map((notice) => (
          <li key={notice._id}>
            {editMode === notice._id ? (
             
              <div>
                <input type="text" name="title" value={editedNotice.title} onChange={handleChange} />
                <textarea name="body" value={editedNotice.body} onChange={handleChange} />
                <select name="category" value={editedNotice.category} onChange={handleChange}>
                  <option value="parking">Parking</option>
                  <option value="covid">Covid</option>
                  <option value="maintenance">Maintenance</option>
                </select>
                <button onClick={() => handleEditSave(notice._id)}>Save</button>
                <button onClick={handleEditCancel}>Cancel</button>
              </div>
            ) : (
              
              <div>
                <strong>{notice.title}</strong>
                <p>{notice.body}</p>
                <p>Category: {notice.category}</p>
                <p>Date: {new Date(notice.date).toLocaleDateString()}</p>
                <button onClick={() => handleEdit(notice._id)}>Edit</button>
                <button onClick={() => handleDelete(notice._id)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default MyNoticesPage;
