import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import logos from '../../logos';
const Home = () => {
  return (
    <main>
      <Navbar />
      <section className='first-section'>
        <div className="center">
          <h1>ASHIK ANSARI</h1>
          <h2>WEB - DEVELOPER</h2>
        </div>
      </section>
      <section className='second-section'>
        <div className="info">
          <h3>About Me</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, harum delectus unde, tempore itaque quo est esse sapiente fugiat iure suscipit praesentium. Quia odio repudiandae pariatur quibusdam consequatur ad atque magnam facere placeat animi?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias magnam, omnis expedita est eius nobis vitae nostrum quos soluta doloribus non facilis, qui dolore ratione dignissimos perspiciatis laborum officia ut corrupti ab dolorum. Quidem quas totam reiciendis molestiae assumenda magni minus doloremque obcaecati fugiat, sequi ipsa. Mollitia, cupiditate vel. Facilis?</p>
        </div>
        <div className="skills">
          <h3>My Skills</h3>
          <div className="grid">
            <div className="skill"><img src={logos.js} alt="skill image" /><span>JavaScript</span></div>
            <div className="skill"><img src={logos.mongoDB} alt="skill image" /><span>MongoDB</span></div>
            <div className="skill"><img src={logos.express} alt="skill image" /><span>ExpressJs</span></div>
            <div className="skill"><img src={logos.react} alt="skill image" /><span>ReactJs</span></div>
            <div className="skill"><img src={logos.nodejs} alt="skill image" /><span>NodeJs</span></div>
            <div className="skill"><img src={logos.postman} alt="skill image" /><span>Postman API</span></div>
            <div className="skill"><img src={logos.git} alt="skill image" /><span>Git</span></div>
            <div className="skill"><img src={logos.GitHub} alt="skill image" /><span>GitHub</span></div>
            <div className="skill"><img src={logos.html} alt="skill image" /><span>HTML</span></div>
            <div className="skill"><img src={logos.css} alt="skill image" /><span>CSS</span></div>
          </div>
        </div>
        <div className="projects">
          <div className="cards">
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

export default Home;
