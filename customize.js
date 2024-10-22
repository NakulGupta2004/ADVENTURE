document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('customization-modal');
    const customizeBtns = document.querySelectorAll('.customize-btn');
    const closeBtn = document.querySelector('.close');
    const form = document.getElementById('customization-form');
    const packageTypeInput = document.getElementById('package-type');

    customizeBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const packageType = this.closest('.package-item').dataset.package;
            packageTypeInput.value = packageType.charAt(0).toUpperCase() + packageType.slice(1);
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

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send this data to a server
        console.log('Form submitted with data:', data);
        
        // For demonstration, we'll just show an alert
        alert('Thank you for your customization request! We will contact you soon.');
        
        modal.style.display = 'none';
        form.reset();
    });

    // Parallax effect
    window.addEventListener('scroll', function() {
        const parallax = document.querySelector('.parallax-effect');
        let scrollPosition = window.pageYOffset;
        parallax.style.backgroundPositionY = scrollPosition * 0.7 + 'px';
    });

    // Animate elements when they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.package-item').forEach((item) => {
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
        .package-item {
            opacity: 0;
        }
    </style>
`);