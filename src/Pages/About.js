import React from 'react'
import './pagesCss/about.css'
export const About = () => {
  return (
    <div className='About'>
      <div className=' card__section'>
        <div className='About__first'>
          <h1>About Me</h1><br /><br />
          <p>Frontend developer having expertise in frontend development and highly motivated individual dedicated to writing clear, concise, robust code that works. I like creating products that either have fun and nifty features or solve a genuine problem for people.</p>
        </div>
        {/* <section className='rajat'>
        <a href="https://app.daily.dev/akp_108"><img src="https://api.daily.dev/devcards/727ac016bc264f9683b5c3c33e32187c.png?r=b71" width="200" alt="Atul Kumar Pandey's Dev Card"/></a>
        </section> */}
        </div>
          <div className='About__second'>
        <h1>Education</h1>
          <section className='stack'>
            <p>Full Stack Developer Bootcamp</p>
            <p>Mar 2022 - present day</p>
          </section>
          <section className='prep'>
            <p>Prepbytes</p> <p>Online</p>
          </section><br />
          <hr />
          <section className='stack'>
            <p>Bachelor in computer Application</p>
            <p>2018 - 2021</p>
          </section>
          <section className='prep'>
            <p>Bharati vidyapeeth</p> <p>Paschim Vihar</p>
          </section>
        </div>
    </div>
  )
}
