import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import API from '../../utils/API';
import './style.css';

export default function Index() {
    const params = useParams();
    const userId = params.id;

    // console.log(userId);

    const [userVillagers, setUserVillagers] = useState([]);

    useEffect(() => {
      API.getUserVillagers(userId)
      .then(result => {
          console.log(result);
      })
        
      }, [])
    return (
        <div>
            
        </div>
    )
}
