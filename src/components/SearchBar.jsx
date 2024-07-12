import React from 'react'

const SearchBar = ({setSerachTerm}) => {
  const handleChange = (e)=>{
    setSerachTerm(e)
  }
  return (
   <div>
     <input type="text"
     placeholder='Serach Plants'
     className='w-full p-2 border rounded-xl mb-4'
     onChange={(e)=>handleChange(e.target.value)}
     />
     
   </div>
  )
}

export default SearchBar