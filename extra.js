document.addEventListener('DOMContentLoaded', function() {
    const tourItems = document.querySelectorAll('.tour-item');
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');
    const modalDescription = document.getElementById('modal-description');
    const closeBtn = document.querySelector('.close');

    // Tour data (simulating a database or API response)
    const tourData = {
        1: {
            title: "Mount Everest Expedition",
            image: "mount-everest.avif",
            description: "Embark on the ultimate adventure to conquer the world's highest peak. Our Mount Everest Expedition offers a once-in-a-lifetime opportunity to stand atop the roof of the world. With expert guides, top-notch equipment, and comprehensive training, we ensure your safety while pushing your limits. Experience the breathtaking views, the challenging terrain, and the sense of accomplishment that comes with scaling Everest. This expedition is not just a climb; it's a journey that will test your physical and mental strength, leaving you with memories and stories to last a lifetime."
        },
        2: {
            title: "Grand Canyon Hike",
            image: "grand-canyon.avif",
            description: "Discover the awe-inspiring beauty of one of nature's greatest wonders on our Grand Canyon Hike. Trek through diverse landscapes, from pine forests to desert terrain, as you descend into the heart of the canyon. Our expert guides will lead you along scenic trails, sharing insights about the canyon's geology, flora, and fauna. Witness stunning sunrises and sunsets that paint the canyon walls in vibrant hues. Whether you're a seasoned hiker or a novice adventurer, this tour offers an unforgettable experience of the Grand Canyon's majesty."
        },
        3: {
            title: "Sahara Desert Safari",
            image: "Sahara Desert Safari.avif",
            description: "Embark on a magical journey through the golden dunes of the Sahara Desert. Our Sahara Desert Safari offers an authentic experience of nomadic life amidst the world's largest hot desert. Ride camels across the sweeping sands, witness breathtaking sunsets, and spend nights under the star-studded sky in traditional Berber camps. Enjoy local cuisine, music, and hospitality as you immerse yourself in the tranquil beauty of the desert. This adventure combines excitement, cultural experiences, and the serene majesty of the Sahara."
        },
        4: {
            title: "Great Barrier Reef Dive",
            image: "Great Barrier Reef Dive.avif",
            description: "Plunge into an underwater paradise with our Great Barrier Reef Dive experience. Explore the world's largest coral reef system, home to an incredible diversity of marine life. Whether you're a certified diver or a first-timer, our experienced instructors will guide you through the vibrant coral gardens teeming with tropical fish, sea turtles, and other fascinating creatures. Discover hidden underwater caves, witness the reef's bioluminescence, and contribute to coral conservation efforts. This dive adventure offers a unique opportunity to experience one of the world's most spectacular natural wonders."
        },
        5: {
            title: "Amazon Rainforest Trek",
            image: "Amazon Rainforest Trek.avif",
            description: "Venture into the heart of the world's largest rainforest with our Amazon Rainforest Trek. Led by expert local guides, you'll journey through lush jungle paths, cruise along winding rivers, and camp in the midst of this biodiverse wonderland. Encounter exotic wildlife, learn about medicinal plants from indigenous communities, and witness the complex ecosystem of the Amazon up close. From canopy walks high above the forest floor to nighttime expeditions in search of nocturnal creatures, this trek offers an immersive experience in one of the planet's most crucial and fascinating environments."
        },
        6: {
            title: "Patagonia Adventure",
            image: "patagonia.jpg",
            description:  "Embark on an epic journey through the wild and rugged landscapes of Patagonia. Our Patagonia Adventure takes you to the southernmost part of South America, where you'll experience breathtaking glaciers, towering mountains, and pristine lakes. Hike through Torres del Paine National Park, kayak in the Strait of Magellan, and witness the massive Perito Moreno Glacier. Encounter diverse wildlife, from guanacos to Andean condors, and immerse yourself in the unique culture of Patagonian gauchos. This adventure combines outdoor activities with natural wonders, offering an unforgettable exploration of one of the world's last great wildernesses."
        },
        7: {
            title: "Andaman and Nicobar Islands",
            image: "andamon.jpeg",
            description: "Discover paradise on Earth with our Andaman and Nicobar Islands tour. These remote Indian archipelagos offer pristine beaches, crystal-clear waters, and a rich marine ecosystem. Snorkel or dive in vibrant coral reefs, home to colorful fish and rare sea life. Explore lush mangrove forests, visit indigenous tribal villages, and learn about the islands' unique history and culture. Relax on secluded beaches, try water sports, and witness stunning sunsets over the Bay of Bengal. This tour combines tropical relaxation with adventure, perfect for those seeking an off-the-beaten-path island experience."
        },
        8: {
            title: "Disney Land",
            image: "disney.jpeg",
            description: "Step into a world of magic and wonder with our Disneyland adventure. Experience the joy and excitement of the happiest place on Earth, where beloved Disney characters come to life. Enjoy thrilling rides, spectacular shows, and enchanting parades. From the iconic Sleeping Beauty Castle to futuristic Tomorrowland, each themed area offers unique attractions and immersive experiences. Meet your favorite Disney princesses, dine in themed restaurants, and watch mesmerizing fireworks light up the night sky. This tour is perfect for families, couples, and anyone looking to relive the magic of childhood and create unforgettable memories."
        }
    };

    tourItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const tourId = this.getAttribute('data-id');
            const tour = tourData[tourId];
            
            modalTitle.textContent = tour.title;
            modalImage.src = tour.image;
            modalImage.alt = tour.title;
            modalDescription.textContent = tour.description;
            
            modal.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(e) {
        if (e.target == modal) {
            modal.style.display = 'none';
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animate elements when they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.tour-item').forEach((item) => {
        observer.observe(item);
    });
});

// Add this CSS to your stylesheet for the fade-in animation
document.head.insertAdjacentHTML('beforeend', `
    <style>
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
            animation: fadeIn 0.5s ease-out forwards;
        }
        .tour-item {
            opacity: 0;
        }
    </style>
`);