import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const Contact = () => {
  return (
    <main>
      <Navbar />
      <section className='first-section'>
        <div className="center">
          <h1>CONTACT ME</h1>
          <h2>HAVE SOME QUERY?</h2>
        </div>
      </section>
      <section className='second-section'>
        <div className="info">
          <h3>Contact Me</h3>
          <div className='grid'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, harum delectus unde, tempore itaque quo est esse sapiente fugiat iure suscipit praesentium. Quia odio repudiandae pariatur quibusdam consequatur ad atque magnam facere placeat animi?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias magnam, omnis expedita est eius nobis vitae nostrum quos soluta doloribus non facilis, qui dolore ratione dignissimos perspiciatis laborum officia ut corrupti ab dolorum. Quidem quas totam reiciendis molestiae assumenda magni minus doloremque obcaecati fugiat, sequi ipsa. Mollitia, cupiditate vel. Facilis?</div>
        </div>
      </section>
      <Footer />
      
    </main>
  )
}

export default Contact;
