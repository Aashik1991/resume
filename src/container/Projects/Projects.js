import React, {useEffect} from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0 , 0);
  })
  return (
    <main>
      <section className='first-section'>
      <Navbar />
        <div className="center">
          <h1>MY PROJECTS</h1>
          <h2>MADE WITH PASSION</h2>
        </div>
      </section>
      <section className='second-section'>
        <div className="projects">
          <div className="cards">
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
          </div>
          <div className="btns">
            <div className="btn">
              <button>
                <i className="fa-solid fa-arrow-right"></i>All Projects
              </button>
            </div>
            <div className="btn">
              <button>
                <i className="fa-solid fa-arrow-right"></i>Contact Me
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default Projects;
