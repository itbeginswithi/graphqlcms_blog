import React from 'react'
import Link from 'next/link'

const categories = [{name: 'React', slug: 'react'}, {name: 'Web Development', slug: 'web development'}];

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
                {categories.map((category, index) => (
                    <Link key={index} href='/'>
                        <a>
                            <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
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