import React, { useEffect, useState } from 'react'
import { getCategories } from '../services'

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    setCategories(getCategories);
  }, [])
  

  return (
    <div>Categories</div>
  )
}

export default Categories