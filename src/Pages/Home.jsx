import React, { useEffect } from 'react';
import '../Style.css';

const App = () => {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

    // Parallax effect for hero section
    const handleScroll = () => {
      const parallax = document.querySelector('.hero');
      const scrollPosition = window.pageYOffset;
      if (parallax) {
        parallax.style.backgroundPositionY = `${scrollPosition * 0.7}px`;
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Animate elements when they come into view
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fadeInUp');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section:not(.hero)').forEach(section => {
      observer.observe(section);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
        <div className="bod">

       


      <section id="home" className="hero">
        <div className="hero-content">
          <h2>Explore the World with Us</h2>
          <p>Discover amazing places at exclusive deals!</p>
          <a href="#services" className="btn float">Learn More</a>
        </div>
      </section>

      <section id="services" className="services">
        <div className="container">
          <h2>Our Services</h2>
          <div className="service-list">
            <a href="adventure.html" className="service-item">
            <img src="/images/adventure.jpg" alt="Adventure" />

              <h3><i className="ri-compass-3-line"></i> Adventure Tours</h3>
              <p>Experience thrilling adventures with our specially curated tours.</p>
            </a>

            <a href="citytour.html" className="service-item">
              <img src="/images/citytours.jpg" alt="" className="citytours-img" />
              <h3><i className="ri-building-2-line"></i> City Tours</h3>
              <p>Discover the beauty of cities around the world with our guided city tours.</p>
            </a>

            <a href="customize.html" className="service-item">
              <img src="/images/customized.jpg" alt="" className="customized-img" />
              <h3><i className="ri-settings-5-line"></i> Customized Packages</h3>
              <p>Create your own travel package with our customizable options.</p>
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <h2>About Us</h2>
          <p>We are a leading travel agency offering unforgettable travel experiences. Whether you're looking for a family vacation, a romantic getaway, or an adventure trip, we've got you covered.</p>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <h2>Contact Us</h2>
          <p>Have any questions? Feel free to reach out!</p>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit" className="float">Send Message</button>
          </form>
        </div>
      </section>


      </div>
    </div>
  );
};

export default App;
