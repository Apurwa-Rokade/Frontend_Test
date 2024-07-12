import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import SearchBar from './SearchBar';

const Home = () => {
 const[plants, setPlants] =useState([]);
 const[searchTerm, setSerachTerm] = useState('')
  
  useEffect(()=>{
    fetch('https://lza4vi7uuvokxmbo5kmt4ou7i40nzhbg.lambda-url.us-east-1.on.aws/')
    .then((response)=>response.json())
    .then((data)=>setPlants(data))
    .catch((error)=>console.log(error));
    setSerachTerm('')
  },[])

const handleClick = () =>{

}
console.log(searchTerm, "is serach")

const filterdPlants = plants.filter(plant =>plant.name.toLowerCase().includes(searchTerm))
  console.log(plants , "is plants")
  return (
    <div>
      Home
      <SearchBar setSerachTerm={setSerachTerm}/>
<div className='grid grid-cols-3'>
       {
        filterdPlants.map((plants)=>{
          return(
          <Link to={`/plant/${plants.id}`} key={plants.id}>
            <div className='flex items-center border-2 bg-slate-400 ' onClick={handleClick}>
           <div className='details-con '>
          <h1 className='text-2xl font-bold mb-4'>{plants.category}</h1>
           <div>{plants.name}</div>
           <div>{plants.price}</div>
           </div>
            <div className='w-full grid'>
              <img src={plants.image} alt={plants.name} />
            </div>
            </div>
          </Link>
          )
        })
       }
</div>

     
    </div>
  )
}

export default Home