import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
        <div className="border-b w-full inline-block border-blue-400 py-8">
            <div className="md:float-left block-header">
                <Link to='/'>
                    <span className="cursor-pointer font-bold text-4xl text-white">
                        GraphCMS
                    </span>
                </Link>
            </div>
            <div className="md:float-left md:contents hidden">
                {categories.map((category) => (
                    <Link to={category.slug} href={`/category/${}`}
                ))}
            </div>
        </div>
    </div>
  )
}

export default Header