import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import "./contact.css"

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
        <div className="contact">
          <h3>Contact Me</h3>
          <div className='grid'>
            <div className='grid-item'>
              <div>Name</div>
              <input type="text" placeholder='Your Name' />
            </div>
            <div className='grid-item'>
              <div>E-mail</div>
              <input type="text" placeholder='email@example.com' />
            </div>
            <div className='grid-item query'>
              <div>Query</div>
              <input type="text" placeholder='Ask Your Question here' />
            </div>
          </div>
          <div className="btn">
            <button>
              <i className="fa-solid fa-arrow-right"></i>Send Message
            </button>
          </div>
        </div>
      </section>
      <Footer />

    </main>
  )
}

export default Contact;
