import React, { useEffect, useState } from 'react'
import { getCategories } from '../services'

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    setCategories(categories)
  }, [])
  

  return (
    <div>Categories</div>
  )
}

export default Categories