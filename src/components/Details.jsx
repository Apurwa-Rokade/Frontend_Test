import React, { useState ,useEffect} from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
  const[plants, setPlants] =useState([]);
  const{id} = useParams();
  console.log(id)
   
   useEffect(()=>{
     fetch('https://lza4vi7uuvokxmbo5kmt4ou7i40nzhbg.lambda-url.us-east-1.on.aws/')
     .then((response)=>response.json())
     .then((data)=>setPlants(data))
     .catch((error)=>console.log(error));
   
   },[id])
 
 filterDetails
  return (
    <div>Details
 {plants.map((item,i)=>{
  return(
    <div key={item.id}>
        <h1>{item.name}</h1>
    </div>
  )
 })}
    </div>
  )
}

export default Details