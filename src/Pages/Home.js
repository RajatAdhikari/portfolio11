import React from 'react'
import './pagesCss/Home.css'
import rajat1 from '../Image/rajat.jpeg'
import rajat from '../Image/cv.pdf'
const Home = () => {
  return (
    <div className='Home'>
        <div className='div__left'>
           <section className='first'>
            <h1>HI,</h1>
           <h1>MY NAME</h1> 
              <h1>IS</h1> 
           </section>

            <section className='second'>
            <h1 style={{color:"red"}}>RAJAT ADHIKARI</h1>
            <h1>FULLSTACK DEVELOPER</h1>
            <h2>I build things for web</h2>
            </section><br /><br />
            <button><a href={rajat} download={rajat}>Download Resume</a></button>
      

        </div>

        <div className='div__rigth'>
              <img src={rajat1} alt="error" />
        </div>

    </div>
  )
}

export default Home