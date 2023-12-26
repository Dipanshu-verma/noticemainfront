import React, { useState, useEffect } from 'react';
import NoticeList from '../components/NoticeList';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const HomePage = ({login}) => {
  const [notices, setNotices] = useState([]);
  const navigate =  useNavigate();
  const headers = {
    'Content-Type': 'application/json',  
    'authorization': JSON.parse(localStorage.getItem("jwt_token"))||null, 
    
  };
   

  useEffect(() => {
    
fatchNotices();
    
  }, []);

async function fatchNotices(){

try{
    const data =  await axios.get("https://notice-back-8mgu.onrender.com/notice", {headers});
    
setNotices(data.data)

}catch(error){
    console.log("something went wrong");
}
     
}

  return (
    <div>
      <h1>Welcome</h1>
      {login &&  <NoticeList myNotices={notices} />}
    
    </div>
  );
};

export default HomePage;
