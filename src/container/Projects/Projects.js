import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const Projects = () => {
  return (
    <main>
      <Navbar />
      <section className='first-section'>
        <div className="center">
          <h1>MY PROJECTS</h1>
          <h2>MADE WITH PASSION</h2>
        </div>
      </section>
      <section className='second-section'>
        <div className="third">
          <div className="cards">
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
          </div>
          <div className="btns">
            <div className="btn"><button>All Projects</button></div>
            <div className="btn"><button>Contact Me</button></div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default Projects;
