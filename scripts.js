// Futuristic Binary Rain Background Effect
function createBinaryRain() {
    const binaryRain = document.createElement('div');
    binaryRain.className = 'binary-rain';
    document.body.appendChild(binaryRain);

    const characters = '01';
    const columns = Math.floor(window.innerWidth / 20);
    const drops = [];

    // Create columns
    for (let i = 0; i < columns; i++) {
        drops[i] = 1;

        // Create container for each column
        const column = document.createElement('div');
        column.className = 'binary-column';
        column.style.left = (i * 20) + 'px';
        column.style.animationDelay = Math.random() + 's';
        binaryRain.appendChild(column);

        // Fill column with binary characters
        for (let j = 0; j < Math.floor(window.innerHeight / 20); j++) {
            const bit = document.createElement('span');
            bit.textContent = characters.charAt(Math.floor(Math.random() * characters.length));
            bit.style.opacity = Math.random() * 0.5 + 0.1;
            bit.style.animationDelay = (Math.random() * 5) + 's';
            column.appendChild(bit);
        }
    }
}

// Define your projects as an array of objects
const projects = [
    {
        title: "CeleBlessings Admin Panel 🛠️ | Vendor Dashboard",
        description: "A powerful admin interface for CeleBlessings vendors to manage:\n\n📦 Product inventory & listings\n💰 Orders & payments\n📊 Sales analytics\n🎪 Event decoration bookings\n👥 Customer interactions",
        videoUrl: "https://www.youtube.com/embed/n4WKtwMPpNM",
        downloadLink: "",
        techStack: ["Flutter", "Firebase", "Cloud Firestore"]
    },
    {
        title: "CeleBlessings 🎁✨ | Handmade Gifts & Event Decor",
        description: "A beautiful e-commerce app for unique handmade gifts 🎀 and event decoration services 🎪. Features:\n\n🛒 Product listings & categories\n📅 Event booking system\n💌 Customer management\n📦 Order tracking & notifications",
        videoUrl: "https://www.youtube.com/embed/HHnOyrLkKvE",
        downloadLink: "https://drive.google.com/file/d/1MnD1jt8dF6pd-CZlQQRLVa_eTww2VhaK/view?usp=drive_link",
        techStack: ["Flutter , ", "supabase"]
    },
    {
        title: "Meal Dash Admin Pro 👨💼 | Restaurant Control Hub",
        description: "The ultimate Flutter-Firebase admin panel for restaurants using Meal Dash! Features include:\n\n" +
            "• Real-time order management\n" +
            "• Menu & inventory control\n" +
            "• Sales analytics & reports\n" +
            "• Multi-admin roles & permissions\n" +
            "• Instant notifications & alerts\n\n" +
            "NOTE: APK not available due to sensitive admin access & Firebase security rules. 🔒",
        videoUrl: "https://www.youtube.com/embed/Of4-P8DbJeY",
        downloadLink: "",
        techStack: ["Flutter , ", "supabase"]
    },
    {
        title: "Meal Dash 🚀 | Lightning-Fast Food Delivery",
        description: "A high-performance Flutter-Firebase food delivery app with killer features: \n⚡ Real-time order tracking \n🍔 Restaurant & menu browsing \n💳 Secure payments (COD) \n📱 Smooth UI animations & dark mode ",
        videoUrl: "https://www.youtube.com/embed/KElHLh_dMIA",
        downloadLink: "https://drive.google.com/file/d/1lb6sJ80xGGJH2qFeAzBhWXwvDvhY2IGb/view?usp=drive_link",
        techStack: ["Flutter , ", "supabase , ", "Provider"]
    },
    {
        title: "ShopSphere Pro 🛍️ | Admin + Store App",
        description: "A sleek Flutter-Firebase powered e-commerce app with a powerful admin dashboard! Features include: \n✨ Real-time product & order management \n📊 Sales analytics & reporting \n🔑 Multi-role access (Admin/User) \n🚀 Blazing-fast performance \n\n📝 NOTE: APK not available due to sensitive Firebase backend configuration 🔒",
        videoUrl: "https://www.youtube.com/embed/Ts8j21MRdEs",
        downloadLink: "",
        techStack: ["Flutter , ", " Firebase , ", " Provider , ", " Cloud Firestore "]
    },
    {
        "title": "Shop App: E-commerce Platform",
        "description": "An e-commerce app built with Flutter and Firebase, allowing users to browse products, add to cart, and complete purchases seamlessly.",
        "videoUrl": "https://www.youtube.com/embed/wr96lXelWWs",
        "downloadLink": "https://drive.google.com/file/d/1kbfhy5VWkgsQ4MiyIQbyTBghLQteVoVd/view?usp=drive_link",
        "techStack": ["Flutter , ", "Firebase "]
    },
    {
        "title": "Weather App: Real-time Weather Updates",
        "description": "A weather app that fetches real-time data using a weather API, providing users with up-to-date weather information for any location.",
        "videoUrl": "https://www.youtube.com/embed/GRoXv7mPhNo",
        "downloadLink": "https://drive.google.com/file/d/10TIb0VNWZD4uZ8KfnInceucaY9hpBZYZ/view?usp=drive_link",
        "techStack": ["Flutter , ", "Weather API"]
    },

];

// Enhanced function to dynamically load projects with futuristic effects
document.addEventListener("DOMContentLoaded", () => {
    // Initialize binary rain background
    createBinaryRain();

    // Add grid pattern to body
    const gridPattern = document.createElement('div');
    gridPattern.className = 'grid-pattern';
    document.body.appendChild(gridPattern);

    const projectsContainer = document.getElementById("projects-container");

    if (!projectsContainer) {
        console.error("Projects container not found!");
        return;
    }

    projects.forEach((project, index) => {
        const projectCard = document.createElement("div");
        projectCard.className = "project-card";
        projectCard.style.animationDelay = `${index * 0.1}s`;

        // Create tech stack badges
        const techStackHTML = project.techStack
            ? `<div class="tech-stack">${project.techStack.map(tech =>
                `<span class="tech-badge">${tech}</span>`).join('')}</div>`
            : '';

        projectCard.innerHTML = `
              <div class="project-content">
                  <h3 class="text-xl font-bold text-cyan-300 mb-3 neon-text">${project.title}</h3>
                  <p class="text-gray-300 mb-4">${project.description}</p>
                  ${techStackHTML}
                  ${project.videoUrl ? `
                  <div class="video-container">
                      <iframe src="${project.videoUrl}" 
                              frameborder="0" 
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                              allowfullscreen></iframe>
                      <div class="video-overlay"></div>
                  </div>` : ""}
                  <div class="project-buttons">
                      <a href="${project.downloadLink || '#'}" 
                         class="${project.downloadLink ? 'btn-futuristic' : 'disabled'}">
                          <i class="fas fa-download mr-2"></i> ${project.downloadLink ? "Download" : "Coming Soon"}
                      </a>
                      ${project.videoUrl ? `
                      <a href="${project.videoUrl}" target="_blank" class="btn-futuristic">
                          <i class="fas fa-play mr-2"></i> Demo
                      </a>` : ''}
                  </div>
              </div>
          `;

        projectsContainer.appendChild(projectCard);

        // Add hover effect with GSAP (if available)
        if (window.gsap) {
            projectCard.addEventListener('mouseenter', () => {
                gsap.to(projectCard, {
                    y: -10,
                    duration: 0.3,
                    boxShadow: "0 15px 45px rgba(0, 240, 255, 0.4)"
                });
            });
            projectCard.addEventListener('mouseleave', () => {
                gsap.to(projectCard, {
                    y: 0,
                    duration: 0.3,
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)"
                });
            });
        }
    });

    // Initialize floating elements
    const floatingElements = document.querySelectorAll('.animate-float, .animate-float-delay');
    floatingElements.forEach(el => {
        if (window.gsap) {
            gsap.to(el, {
                y: -20,
                x: 10,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        }
    });
});

// Enhanced Typewriter Effect with Neon Pulse
document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.typewriter-container');
    if (!container) return;

    const text = "🚀 I craft stunning, high-performance cross-platform apps with Flutter. Passionate about delivering seamless user experiences and pixel-perfect UIs that wow users.✨";
    const isMobile = window.innerWidth < 768;
    const displayText = isMobile
        ? "🚀 I build high-performance Flutter apps with blazing speed ⚡ and pixel-perfect UIs 🎯 that elevate user experiences."
        : text;
    let index = 0;
    const speed = isMobile ? 40 : 30;

    function typeWriter() {
        if (index < displayText.length) {
            if (index === 0) {
                const p = document.createElement('p');
                p.className = 'typewriter-line';
                container.appendChild(p);
            }
            container.lastChild.textContent += displayText.charAt(index);
            index++;

            // Add random neon pulse effect to characters
            if (index % 5 === 0) {
                container.lastChild.style.textShadow = `0 0 ${Math.random() * 10 + 5}px rgba(0, 240, 255, ${Math.random() * 0.5 + 0.5})`;
            }

            setTimeout(typeWriter, Math.random() * speed + speed);
        } else {
            // Continuous neon pulse after typing completes
            setInterval(() => {
                const intensity = Math.random() * 0.5 + 0.5;
                container.lastChild.style.textShadow = `0 0 ${Math.random() * 10 + 5}px rgba(0, 240, 255, ${intensity})`;
            }, 1000);
        }
    }

    setTimeout(typeWriter, 500);
});

// Enhanced Contact Form with Futuristic Effects
document.getElementById('contactForm')?.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Create mailto link
    const subject = `Message from ${name}`;
    const body = `${message}\n\nFrom: ${name}\nEmail: ${email}`;
    const mailtoLink = `mailto:syedjariabbas1@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Add futuristic send animation
    const submitBtn = document.querySelector('#contactForm button[type="submit"]');
    if (submitBtn) {
        submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Sending...';
        submitBtn.disabled = true;

        // Create particle effect
        if (window.gsap) {
            for (let i = 0; i < 10; i++) {
                const particle = document.createElement('div');
                particle.className = 'form-particle';
                particle.style.left = `${Math.random() * 100}%`;
                particle.style.top = `${Math.random() * 100}%`;
                submitBtn.appendChild(particle);

                gsap.to(particle, {
                    x: (Math.random() - 0.5) * 100,
                    y: -100,
                    opacity: 0,
                    duration: 1,
                    onComplete: () => particle.remove()
                });
            }
        }

        setTimeout(() => {
            // Open email client
            window.location.href = mailtoLink;
            submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Message Sent!';

            // Reset form after delay
            setTimeout(() => {
                this.reset();
                submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
                submitBtn.disabled = false;
            }, 3000);
        }, 1500);
    } else {
        window.location.href = mailtoLink;
    }
});

// Add futuristic input effects
document.querySelectorAll('#contactForm input, #contactForm textarea').forEach(input => {
    input.addEventListener('focus', () => {
        input.style.boxShadow = '0 0 15px rgba(0, 240, 255, 0.5)';
        input.style.borderColor = 'var(--primary)';

        // Add floating label effect
        const label = document.querySelector(`label[for="${input.id}"]`);
        if (label) {
            label.style.color = 'var(--primary)';
            label.style.textShadow = '0 0 5px rgba(0, 240, 255, 0.5)';
        }
    });

    input.addEventListener('blur', () => {
        input.style.boxShadow = 'none';
        input.style.borderColor = 'rgba(0, 240, 255, 0.3)';

        const label = document.querySelector(`label[for="${input.id}"]`);
        if (label) {
            label.style.color = '';
            label.style.textShadow = '';
        }
    });
});

// Add scroll animations
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const binaryRain = document.querySelector('.binary-rain');

    if (binaryRain) {
        binaryRain.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    }

    // Parallax effect for elements with data-speed attribute
    document.querySelectorAll('[data-speed]').forEach(el => {
        const speed = parseFloat(el.getAttribute('data-speed'));
        el.style.transform = `translateY(${scrollPosition * speed}px)`;
    });
});

// Initialize Intersection Observer for scroll animations
if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}
