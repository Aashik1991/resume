import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

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
        <div className="first">
          <h3>About Me</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, harum delectus unde, tempore itaque quo est esse sapiente fugiat iure suscipit praesentium. Quia odio repudiandae pariatur quibusdam consequatur ad atque magnam facere placeat animi?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias magnam, omnis expedita est eius nobis vitae nostrum quos soluta doloribus non facilis, qui dolore ratione dignissimos perspiciatis laborum officia ut corrupti ab dolorum. Quidem quas totam reiciendis molestiae assumenda magni minus doloremque obcaecati fugiat, sequi ipsa. Mollitia, cupiditate vel. Facilis?</p>
        </div>
        <div className="second">
          <h3>My Skills</h3>
          <div className="grid">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque perferendis ducimus eum rerum. Illum, quia similique nihil nemo veniam adipisci debitis cumque, velit iste minima laboriosam eligendi necessitatibus. Consectetur, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias rem voluptatem dicta magnam reiciendis, iure consequuntur, recusandae numquam quibusdam debitis ea asperiores laboriosam reprehenderit ex assumenda corrupti. Enim quos sint odit numquam animi libero obcaecati, quod, sunt rerum ea distinctio, deleniti sit voluptatibus. Nihil assumenda, recusandae facere modi culpa tenetur aspernatur laborum error sunt cum! Amet recusandae dolor magni nesciunt sequi distinctio, aperiam doloribus, obcaecati iste veritatis nemo et deleniti beatae. Quae obcaecati maiores et consequuntur voluptatem assumenda odio eum.
          </div>
        </div>
        <div className="third">
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
