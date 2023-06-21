import Image from 'next/image'
import Head from 'next/head'



export default function Home() {
  return (
    <>
    <Head>
        <title>Advice Generator App</title>
        <meta
          name="description"
          content="Advice Generator App create by next.js"
        />
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>
     <main className='main'>
      <div className='AdviceContainer'>
        <div className='TextContainer'>
          <p>ADVICE #27 </p>
          <span>"It is easy to sit up and take notice, what's difficult is getting up and taking action."</span>
        </div>
        <div className='Divider'>
          <Image
          src="/images/pattern-divider-mobile.svg"
          alt='divider mobile image'
          width={295}
          height={16}
          />
        </div>
        <div className='RandomBtn'>
          <Image
          src="/images/icon-dice.svg"
          alt='dice image'
          width={24}
          height={24}
          />
        </div>
      </div>
    </main>
    </>
   
  )
}
