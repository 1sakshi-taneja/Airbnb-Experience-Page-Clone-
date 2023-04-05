// import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Card from './Components/Card' 
import data from './data'

function App() {

let cards = data.map((d)=>{
         return  <Card key={d.id} 
          // title={d.title} des={d.description} img={d.coverImg} 
          //  price={d.price} lctn={d.location} spots={d.openSpots}  rating={d.stats.rating}
          //  review={d.stats.reviewCount} openSpots={d.openSpots}
               item={d}   //passing the entire object
               //{...item}  in cards u will accept it as {props.price} no need to add item in it
          />
})

  return (
    <div>
    <Navbar />
    <section className="cards-list">
    {cards}
    </section>
    {/* <Card img="Swim.png" rating={5.0} reviewCount={6} country="USA" title="Life Lessons with Katie Zaferes" price="From 136$" />
    <Card img="wedding.png" rating={5.0} reviewCount={30} country="USA" title="Learn wedding photography" price="From 125$" />
    <Card img="mountain.png" rating={4.8} reviewCount={2} country="USA" title="Group mountain Biking" price="From 50$" /> */}
    </div>
  )
}

export default App
