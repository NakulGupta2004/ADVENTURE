import React, { useState, useEffect } from 'react';
import './TourExplorer.css';

const TourExplorer = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState(null);
  const [animatedItems, setAnimatedItems] = useState([]);

  const tours = [
    // {
    //   id: 1,
    //   name: "Mount Everest Expedition",
    //   description: "Experience the ultimate adventure by climbing the highest peak in the world.",
    //   image: "https://source.unsplash.com/random/600x400/?everest",
    //   fullDescription: "Embark on a once-in-a-lifetime journey to conquer Mount Everest, the world's highest peak. This expedition offers the ultimate challenge for experienced climbers, with breathtaking views and the chance to stand on top of the world.",
    //   package: "14-day Everest Base Camp Trek",
    //   price: "$4,999 per person"
    // },
    // {
    //   id: 2,
    //   name: "Grand Canyon Hike",
    //   description: "Embark on an epic hike through the breathtaking Grand Canyon in Arizona.",
    //   image: "https://source.unsplash.com/random/600x400/?grand,canyon",
    //   fullDescription: "Discover the awe-inspiring beauty of one of nature's greatest wonders on our Grand Canyon Hike. Trek through diverse landscapes, from pine forests to desert terrain, as you descend into the heart of the canyon.",
    //   package: "5-day Grand Canyon Rim-to-Rim Adventure",
    //   price: "$1,499 per person"
    // },
    // {
    //   id: 3,
    //   name: "Sahara Desert Safari",
    //   description: "Ride camels and camp under the stars in the vast Sahara Desert.",
    //   image: "https://source.unsplash.com/random/600x400/?sahara,desert",
    //   fullDescription: "Experience the magic of the Sahara Desert on this unforgettable safari. Ride camels across golden dunes, camp under a blanket of stars, and immerse yourself in the rich culture of the desert nomads.",
    //   package: "7-day Sahara Adventure",
    //   price: "$2,299 per person"
    // },


    {
      id: 1,
      name: "Mount Everest Expedition",
      description: "Experience the ultimate adventure by climbing the highest peak in the world.",
      image: "https://cdn.mos.cms.futurecdn.net/D9bzCVeZLHQnZ6bUWvAkrW-1200-80.jpg",
      fullDescription: "Embark on the ultimate adventure to conquer the world's highest peak. Our Mount Everest Expedition offers a once-in-a-lifetime opportunity to stand atop the roof of the world. With expert guides, top-notch equipment, and comprehensive training, we ensure your safety while pushing your limits.",
      package: "14-day Everest Base Camp Trek",
      price: "$4,999 per person",
      itinerary: [
        "Day 1-2: Arrive in Kathmandu, acclimatization and preparation",
        "Day 3: Fly to Lukla, trek to Phakding",
        "Day 4-8: Trek through Namche Bazaar, Tengboche, and Dingboche",
        "Day 9-10: Reach Everest Base Camp and Kala Patthar",
        "Day 11-13: Descend to Lukla",
        "Day 14: Fly back to Kathmandu"
      ]
    },
    {
      id: 2,
      name: "Grand Canyon Hike",
      description: "Embark on an epic hike through the breathtaking Grand Canyon in Arizona.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8K8ytDn7Nw-Bi6EU_JV9lufFtgCCALlTkQg&s",
      fullDescription: "Discover the awe-inspiring beauty of one of nature's greatest wonders on our Grand Canyon Hike. Trek through diverse landscapes, from pine forests to desert terrain, as you descend into the heart of the canyon.",
      package: "5-day Grand Canyon Rim-to-Rim Adventure",
      price: "$1,499 per person",
      itinerary: [
        "Day 1: Arrive at North Rim, orientation",
        "Day 2: Hike to Cottonwood Campground",
        "Day 3: Trek to Bright Angel Campground",
        "Day 4: Ascend to Indian Garden",
        "Day 5: Climb to South Rim, depart"
      ]
    },
    {
      id: 3,
      name: "Sahara Desert Safari",
      description: "Ride camels and camp under the stars in the vast Sahara Desert.",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/ac/4d/f1/caption.jpg?w=1200&h=-1&s=1",
      fullDescription: "Embark on a magical journey through the golden dunes of the Sahara Desert. Our Sahara Desert Safari offers an authentic experience of nomadic life amidst the world's largest hot desert.",
      package: "7-day Sahara Adventure",
      price: "$2,299 per person",
      itinerary: [
        "Day 1: Arrive in Marrakech",
        "Day 2-3: Journey to the Sahara, camel trek",
        "Day 4-5: Desert camping and exploration",
        "Day 6: Return to Marrakech",
        "Day 7: Depart Marrakech"
      ]
    },
    {
      id: 4,
      name: "Great Barrier Reef Dive",
      description: "Dive into the world's largest coral reef system for an underwater adventure.",
      image: "https://greatbarrierreef.org/wp-content/uploads/2022/06/Lady-Musgrave-Island-Great-Barrier-Reef.jpg",
      fullDescription: "Dive into the world's largest coral reef system for an underwater adventure. Discover hidden underwater caves, witness the reef's bioluminescence, and contribute to coral conservation efforts.",
      package: "5-day Great Barrier Reef Exploration",
      price: "$2,799 per person",
      itinerary: [
        "Day 1: Arrive in Cairns, Australia",
        "Day 2-3: Diving expeditions at various reef locations",
        "Day 4: Snorkeling and marine biology workshop",
        "Day 5: Optional scenic flight over the reef, depart"
      ]
    },
    {
      id: 5,
      name: "Amazon Rainforest Trek",
      description: "Venture into the heart of the world's largest rainforest with our Amazon Rainforest Trek.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNFcXpp9xQrh49zStTLTQIUPAa1F-FbCz9Ng&s",
      fullDescription: "Venture into the heart of the world's largest rainforest with our Amazon Rainforest Trek. Led by expert local guides, you'll journey through lush jungle paths, cruise along winding rivers, and camp in the midst of this biodiverse wonderland.",
      package: "8-day Amazon Expedition",
      price: "$3,499 per person",
      itinerary: [
        "Day 1: Arrive in Manaus, Brazil",
        "Day 2-3: Jungle trek and wildlife spotting",
        "Day 4-5: River cruise and indigenous village visit",
        "Day 6-7: Canopy walk and night safaris",
        "Day 8: Return to Manaus, depart"
      ]
    },
    {
      id: 6,
      name: "Patagonia Adventure",
      description: "Discover the stunning landscapes of Patagonia with hiking, kayaking, and more.",
      image: "https://pictures.altai-travel.com/1920x0/active-hiker-in-patagonia-mt-fitz-roy-argentina-adobe-stock-2421.jpg",
      fullDescription: "Discover the stunning landscapes of Patagonia with hiking, kayaking, and more. Experience breathtaking glaciers, towering mountains, and pristine lakes in one of the world's last great wildernesses.",
      package: "10-day Patagonia Explorer",
      price: "$4,299 per person",
      itinerary: [
        "Day 1-2: Arrive in Punta Arenas, transfer to Torres del Paine",
        "Day 3-5: Hiking in Torres del Paine National Park",
        "Day 6-7: Glacier trekking and ice climbing",
        "Day 8-9: Kayaking in the Patagonian fjords",
        "Day 10: Return to Punta Arenas, depart"
      ]
    },
    {
      id: 7,
      name: "Andaman and Nicobar Islands",
      description: "Experience the ultimate adventure where pristine beaches and vibrant coral reefs await your exploration.",
      image: "https://travelogyindia.b-cdn.net/storage/app/upload/jolly-buoy-island-andaman.jpg",
      fullDescription: "Experience the ultimate adventure where pristine beaches and vibrant coral reefs await your exploration. Discover the unique beauty and rich marine life of these remote Indian archipelagos.",
      package: "7-day Andaman Island Hopping",
      price: "$2,199 per person",
      itinerary: [
        "Day 1: Arrive in Port Blair",
        "Day 2-3: Havelock Island - beaches and snorkeling",
        "Day 4: Neil Island exploration",
        "Day 5-6: Baratang Island - mangrove forests and limestone caves",
        "Day 7: Return to Port Blair, depart"
      ]
    },
    {
      id: 8,
      name: "Disneyland Adventure",
      description: "Experience the ultimate adventure where dreams come to life in a world of magic and excitement.",
      image: "https://disneyconnect.com/app/uploads/sites/4/2023/11/disney-characters-disneyland.jpg",
      fullDescription: "Experience the ultimate adventure where dreams come to life in a world of magic and excitement. Enjoy thrilling rides, spectacular shows, and create unforgettable memories.",
      package: "5-day Disneyland Magic",
      price: "$1,999 per person",
      itinerary: [
        "Day 1: Arrive and park orientation",
        "Day 2-3: Explore Disneyland Park and Disney California Adventure",
        "Day 4: Character experiences and parades",
        "Day 5: Last-minute adventures, depart"
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setAnimatedItems(prev => [...prev, entry.target.id]);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.tour-card').forEach(card => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const openModal = (tour) => {
    setSelectedTour(tour);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedTour(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="tour-explorer">
      <div className="parallax-bg">
        <h1>Adventurous Tours Around the World</h1>
      </div>
      <div className="tour-grid">
        {tours.map((tour) => (
          <div 
            key={tour.id} 
            id={`tour-${tour.id}`} 
            className={`tour-card ${animatedItems.includes(`tour-${tour.id}`) ? 'animate' : ''}`}
          >
            <div className="tour-card-inner">
              <div className="tour-card-front">
                <img src={tour.image} alt={tour.name} />
                <div className="tour-info">
                  <h3>{tour.name}</h3>
                  <p>{tour.description}</p>
                </div>
              </div>
              <div className="tour-card-back">
                <h3>{tour.name}</h3>
                <p>{tour.package}</p>
                <p className="price">{tour.price}</p>
                <button onClick={() => openModal(tour)}>Learn More</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {modalOpen && selectedTour && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>&times;</button>
            <h2>{selectedTour.name}</h2>
            <img src={selectedTour.image} alt={selectedTour.name} />
            <p>{selectedTour.fullDescription}</p>
            <div className="tour-details">
              <h4>Package: {selectedTour.package}</h4>
              <h4>Price: {selectedTour.price}</h4>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TourExplorer;