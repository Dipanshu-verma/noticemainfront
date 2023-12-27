import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateNotice = () => {
  const [noticeData, setNoticeData] = useState({
    title: '',
    body: '',
    category: 'parking', // Default category
  });
  const navigate =useNavigate();
  const headers = {
    'Content-Type': 'application/json',  
    'authorization': JSON.parse(localStorage.getItem("jwt_token"))||null, 
    
  };
   
  const handleChange = (e) => {
    setNoticeData({
      ...noticeData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
     
      const userId = JSON.parse(localStorage.getItem("user"))._id;

    
      const response = await axios.post(`https://notice-back-8mgu.onrender.com/notice`, noticeData, {
        headers
      });

      console.log('Notice created successfully:', response.data);
       
      navigate("/")
      setNoticeData({
        title: '',
        body: '',
        category: 'parking',
      });
    } catch (error) {
      console.error('Error creating notice:', error);
    }
  };

  return (
    <div>
      <h2>Create Notice</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" name="title" value={noticeData.title} onChange={handleChange} required />

        <label>Body:</label>
        <textarea name="body" value={noticeData.body} onChange={handleChange} required />

        <label>Category:</label>
        <select name="category" value={noticeData.category} onChange={handleChange}>
          <option value="parking">Parking</option>
          <option value="covid">Covid</option>
          <option value="maintenance">Maintenance</option>
        </select>

        <button type="submit">Create Notice</button>
      </form>
    </div>
  );
};

export default CreateNotice;
