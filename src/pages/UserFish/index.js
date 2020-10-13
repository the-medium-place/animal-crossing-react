import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import API from '../../utils/API';


export default function Index() {

    const params = useParams();
    const userId = params.id;

    // console.log(userId);

    const [userFish, setUserFish] = useState([]);

    useEffect(() => {
      API.getUserFish(userId)
      .then(result => {
          console.log(result);
      })
        
      }, [])


    return (
        <div>
            
        </div>
    )
}
