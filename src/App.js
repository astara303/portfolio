import React from 'react'

import Timeline from './components/Timeline'
import Slideshow from './components/Slideshow'
import './App.css'

const App = () => (
    <>
      <h1 className="animated fadeInDown">Astara Cambata</h1>
      <h2>Web Developer</h2>
      <div>
        <p><span><a href="https://github.com/astara303" className="link">GitHub</a></span> | <span><a href="https://linkedin.com/in/astara-cambata/" className="link">Linkedin</a></span> | astaracambata@gmail.com</p>
      </div>
      <div className="blurbBox">
      <div className="blurb">
        <p>I believe in the power of programming. Great code makes people’s lives easier, and can be so much fun for the user. My background in creative and research roles informs the problem-solving and project-management skills I bring to every project.</p>
        <p>My experience at General Assembly was the ultimate crash course in channelling creativity and passion into strict deadlines and learning quickly. The greatest lesson I’ve taken away from the Software Enginerring Immersive is that I can be excited about what I don’t know rather than being afraid of it. I am hyper-focused on delivering on this skill to my future employer. Let’s have a chat!</p>
      </div>
      </div>
      <div>
        <h3>Skills</h3>
        <div className="iconBox">
          <div className="icons">
            <i class="devicon-javascript-plain"></i>
            <i class="devicon-html5-plain-wordmark"></i>
            <i class="devicon-react-original-wordmark"></i>
            <i class="devicon-express-original-wordmark colored"></i>
            <i class="devicon-nodejs-plain-wordmark"></i>
            <i class="devicon-css3-plain-wordmark"></i>
            <i class="devicon-sass-original"></i>
            <i class="devicon-bootstrap-plain-wordmark"></i>
            <i class="devicon-python-plain-wordmark"></i>
            <i class="devicon-django-line-wordmark"></i>
            <i class="devicon-postgresql-plain-wordmark"></i>
            <i class="devicon-heroku-original-wordmark"></i>
            <i class="devicon-mocha-plain"></i>
            <i class="devicon-github-plain-wordmark colored"></i>
          </div>
        </div>
      </div>
      <div>
        <h3>Project Timeline</h3>
        <Slideshow />
        <Timeline />
      </div>
      </>
  )

export default App