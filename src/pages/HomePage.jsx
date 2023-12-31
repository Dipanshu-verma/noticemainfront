import React, { useState, useEffect } from 'react';
 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const HomePage = ({ login ,userdetail}) => {
  const [notices, setNotices] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(''); 
  const navigate = useNavigate();

  const headers = {
    'Content-Type': 'application/json',
    'authorization': userdetail.token,
  };

  useEffect(() => {
    fatchNotices();
  }, [selectedCategory]);  

  async function fatchNotices() {
    try {
      const categoryQueryParam = selectedCategory ? `?category=${selectedCategory}` : '';
      const data = await axios.get(`https://notice-back-8mgu.onrender.com/notice${categoryQueryParam}`, { headers });

      setNotices(data.data);
    } catch (error) {
      console.log("something went wrong");
    }
  }

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div>
      <h1>Welcome  </h1>
      {
        login &&
        <div>
          <h2>Filter Notices</h2>
          <select value={selectedCategory} onChange={handleCategoryChange}>
            <option value="">All Categories</option>
            <option value="parking">Parking</option>
            <option value="covid">Covid</option>
            <option value="maintenance">Maintenance</option>
          </select>

           
          <ul>
            {notices?.map((notice) => (
              <li key={notice._id}>
                <strong>{notice.title}</strong>
                <p>{notice.body}</p>
                <p>Category: {notice.category}</p>
                <p>Date: {new Date(notice.date).toLocaleDateString()}</p>
              </li>
            ))}
          </ul>
        </div>
      }
    </div>
  );
};

export default HomePage;
