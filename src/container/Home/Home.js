import React,{useEffect} from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import logos from '../../logos';
const Home = () => {
  useEffect(() => {
    window.scrollTo(0 , 0);
  })
  return (
    <main>
      <section className='first-section'>
      <Navbar />
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
            <div className="skill"><img src={logos.js} alt="js-logo" /><span>JavaScript</span></div>
            <div className="skill"><img src={logos.mongoDB} alt="mongoDB-logo" /><span>MongoDB</span></div>
            <div className="skill"><img src={logos.express} alt="express-logo" /><span>ExpressJs</span></div>
            <div className="skill"><img src={logos.react} alt="react-logo" /><span>ReactJs</span></div>
            <div className="skill"><img src={logos.nodejs} alt="nodejs-logo" /><span>NodeJs</span></div>
            <div className="skill"><img src={logos.postman} alt="postman-logo" /><span>Postman API</span></div>
            <div className="skill"><img src={logos.git} alt="git-logo" /><span>Git</span></div>
            <div className="skill"><img src={logos.GitHub} alt="github-logo" /><span>GitHub</span></div>
            <div className="skill"><img src={logos.html} alt="html-logo" /><span>HTML</span></div>
            <div className="skill"><img src={logos.css} alt="css-logo" /><span>CSS</span></div>
          </div>
        </div>
        <div className="projects">
          <div className="cards">
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

export default Home;
