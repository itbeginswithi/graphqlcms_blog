import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import { getCategories } from '../services'

const Header = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories))
  }, [])

  return (
    <div className="container mx-auto mb-8 px-10">
      <div className="inline-block w-full border-b border-blue-400 py-8">
        <div className="block-header md:float-left">
          <Link href="/">
            <span className="cursor-pointer text-4xl font-bold text-white">
              GraphCMS
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}>
              <a>
                <span className="mt-2 ml-4 cursor-pointer align-middle font-semibold text-white md:float-right">
                  {category.name}
                </span>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header