import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Holo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <h1>
      Lets build Holo
    </h1>

    {/* Header */}
    <Header />
    {/* Nav */}

    {/* Results */}
    </div>
  )
}
