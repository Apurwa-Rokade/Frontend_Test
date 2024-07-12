import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
  const [plant, setPlant] = useState(null);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetch('https://lza4vi7uuvokxmbo5kmt4ou7i40nzhbg.lambda-url.us-east-1.on.aws/')
      .then((response) => response.json())
      .then((data) => {
        let filterData = data.filter((plant) => plant.id == id);
        console.log(filterData);
        if (filterData.length > 0) {
          setPlant(filterData[0]);
        }
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div className="max-w-md mx-auto p-5">
      {plant ? (
        <div className='border-2 bg-slate-400 p-5 rounded-lg shadow-lg'>
          <div className="flex flex-col items-center">
            <h1 className='text-3xl font-bold mb-4'>{plant.name}</h1>
            <img src={plant.image} alt={plant.name} className="w-48 h-48 mb-4 rounded-lg shadow-md" />
            <p className='text-lg mb-2'><span className='font-semibold'>Category:</span> {plant.category}</p>
            <p className='text-lg mb-2'><span className='font-semibold'>Price:</span> ${plant.price}</p>
            <p className='text-lg mb-2'><span className='font-semibold'>Size:</span> {plant.size}</p>
            <p className='text-lg mb-2'><span className='font-semibold'>Water:</span> {plant.water}</p>
            <p className='text-lg mb-2'><span className='font-semibold'>Light:</span> {plant.light}</p>
            <p className='text-lg mb-2'><span className='font-semibold'>Fertilizer:</span> {plant.fertilizer}</p>
            <p className='text-lg mb-4'><span className='font-semibold'>Bio:</span> {plant.bio}</p>
          </div>
        </div>
      ) : (
        <div className='text-2xl'>Loading .......</div>
      )}
    </div>
  );
};

export default Details;
