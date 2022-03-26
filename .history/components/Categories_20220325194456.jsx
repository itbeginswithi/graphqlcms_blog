import React, { useEffect, useState } from 'react'
import { getCategories } from '../services'

const Categories = () => {
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    getCategories()
      .then((newCategories) => setCategories(newCategories))
  }, [])
  

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
          Categories
      </h3>
      
    </div>
  )
}

export default Categories