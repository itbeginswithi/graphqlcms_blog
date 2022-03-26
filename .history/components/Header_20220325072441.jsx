import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
        <div className="border-b w-full inline-block border-blue-400 py-8">
            <div className="md:float-left block-header">
                <Link to='/'>
                    <span className="cursor-pointer font-bold">
                        GraphCMS
                    </span>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Header