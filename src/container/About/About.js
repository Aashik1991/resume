import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const About = () => {
  useEffect(() => {
    window.scrollTo(0 , 0);
  })
  
  return (
    <main>
      <section className='first-section'>
      <Navbar />
        <div className="center">
          <h1>ABOUT ME</h1>
          <h2>A LEARNER</h2>
        </div>
      </section>
      <section className='second-section'>
        <div className="info">
          <h3>My Background</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, harum delectus unde, tempore itaque quo est esse sapiente fugiat iure suscipit praesentium. Quia odio repudiandae pariatur quibusdam consequatur ad atque magnam facere placeat animi?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias magnam, omnis expedita est eius nobis vitae nostrum quos soluta doloribus non facilis, qui dolore ratione dignissimos perspiciatis laborum officia ut corrupti ab dolorum. Quidem quas totam reiciendis molestiae assumenda magni minus doloremque obcaecati fugiat, sequi ipsa. Mollitia, cupiditate vel. Facilis?</p>
        </div>
        <div className="info">
          <h3>My Hobbies and Interests</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque perferendis ducimus eum rerum. Illum, quia similique nihil nemo veniam adipisci debitis cumque, velit iste minima laboriosam eligendi necessitatibus. Consectetur, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias rem voluptatem dicta magnam reiciendis, iure consequuntur, recusandae numquam quibusdam debitis ea asperiores laboriosam reprehenderit ex assumenda corrupti. Enim quos sint odit numquam animi libero obcaecati, quod, sunt rerum ea distinctio, deleniti sit voluptatibus. Nihil assumenda, recusandae facere modi culpa tenetur aspernatur laborum error sunt cum! Amet recusandae dolor magni nesciunt sequi distinctio, aperiam doloribus, obcaecati iste veritatis nemo et deleniti beatae. Quae obcaecati maiores et consequuntur voluptatem assumenda odio eum.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default About;
