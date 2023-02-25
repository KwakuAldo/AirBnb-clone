import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './nav'
import Hero from './hero'
import CardComponent from './card'
import cardData from './cardData'

function App() {
  const dataElement = cardData.map(data => {
    return <CardComponent
    key={data.id}
    img={data.coverImg}
    rating= {data.stats.rating}
    reviewCount={data.stats.reviewCount}
    location={data.location}
    title={data.title}
    price={data.price}

    />
  })
  return (
    <div className='container'>
      <NavBar />
      <Hero />
      <section className='cards'>
        {dataElement}
      </section>
    </div>
  )
}

export default App
