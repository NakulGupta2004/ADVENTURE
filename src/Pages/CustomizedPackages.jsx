import React, { useState, useEffect, useRef } from 'react';
import { Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import './CustomizedPackages.css';

export default function CustomizedPackages() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => {
      const parallax = document.querySelector('.parallax-effect');
      if (parallax) {
        const scrollPosition = window.pageYOffset;
        parallax.style.backgroundPositionY = `${scrollPosition * 0.7}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.package-item').forEach((item) => {
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setModalOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const openModal = (packageType) => {
    setSelectedPackage(packageType.charAt(0).toUpperCase() + packageType.slice(1));
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log('Form submitted with data:', data);
    alert('Thank you for your customization request! We will contact you soon.');
    setModalOpen(false);
    e.target.reset();
  };

  return (
    <div className={`explore-experts ${isLoaded ? 'loaded' : ''}`}>


      <div className="parallax-effect">
        <h2 className="parallax-title">Customized Packages</h2>
      </div>
  
      <section id="packages">
        <div className="package-grid">
          {[
            { type: 'adventure', title: 'Adventure Package', image: '/placeholder.svg?height=200&width=300', description: 'Explore the world with our thrilling adventure tours. Tailor your experience to include hiking, rafting, and more!' },
            { type: 'luxury', title: 'Luxury Package', image: '/placeholder.svg?height=200&width=300', description: 'Indulge in a luxurious vacation with first-class amenities and personal services. Craft a package suited to your style.' },
            { type: 'family', title: 'Family Package', image: '/placeholder.svg?height=200&width=300', description: 'Enjoy fun-filled activities for the whole family. Design a custom package with attractions for all age groups.' },
            { type: 'romantic', title: 'Romantic Package', image: '/placeholder.svg?height=200&width=300', description: 'Plan a perfect romantic getaway with scenic views, intimate dinners, and more. Make it a trip to remember.' },
          ].map((pkg) => (
            <div key={pkg.type} className="package-item" data-package={pkg.type}>
              <div className="package-image-container">
                <img src={pkg.image} alt={pkg.title} />
              </div>
              <div className="package-info">
                <h3>{pkg.title}</h3>
                <p>{pkg.description}</p>
                <button className="customize-btn" onClick={() => openModal(pkg.type)}>Customize Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {modalOpen && (
        <div className="modal active">
          <div className="modal-content" ref={modalRef}>
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Customize Your Package</h2>
            <form id="customization-form" onSubmit={handleSubmit}>
              <label htmlFor="package-type">Package Type:</label>
              <input type="text" id="package-type" name="package-type" value={selectedPackage} readOnly />
              
              <label htmlFor="duration">Duration (days):</label>
              <input type="number" id="duration" name="duration" min="1" max="30" required />
              
              <label htmlFor="budget">Budget ($):</label>
              <input type="number" id="budget" name="budget" min="100" required />
              
              <label htmlFor="activities">Preferred Activities:</label>
              <textarea id="activities" name="activities" rows={3} required></textarea>
              
              <button type="submit">Submit Request</button>
            </form>
          </div>
        </div>
      )}
    

    </div>
  );
}