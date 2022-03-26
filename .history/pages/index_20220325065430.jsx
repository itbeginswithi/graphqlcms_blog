import Head from 'next/head'
import Image from 'next/image'

const Home = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>CMS Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12"></div>
    </div>
  )
}

export default Home
