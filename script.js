const projects = [
    {
        number: '01',
        name: '🚀 MealDash - Ultimate Food Delivery Experience 🍔',
        description: 'MealDash is a Flutter-based food delivery application offering an intuitive UI, restaurant listings, real-time tracking, and smooth checkout. Users can browse menus, place orders, and track deliveries effortlessly.',
        videoId: 'KElHLh_dMIA',
        apkLink: 'https://drive.google.com/uc?export=download&id=1lb6sJ80xGGJH2qFeAzBhWXwvDvhY2IGb'
    },
    {
        number: '02',
        name: '🍽️ MealDash Admin Panel - Ultimate Restaurant Control 🍕',
        description: 'The MealDash Admin Panel is a cutting-edge Flutter application designed to revolutionize restaurant management. With an intuitive dashboard, real-time order tracking, and seamless menu customization, restaurant owners can streamline operations effortlessly. Built with <strong>Supabase</strong> for secure and scalable data management, it ensures top-tier performance. 🚀<br><br><strong>Note:</strong> This admin panel contains <strong>highly sensitive controls</strong>, so the APK is not publicly available.',
        videoId: 'Of4-P8DbJeY',
        apkLink: ''
    },
    {
        number: '03',
        name: '🛍️ ShopEase - E-Commerce Application 🚀',
        description: 'ShopEase is a Flutter-based e-commerce app powered by Firebase. It offers product search, order placement, payments, and order tracking. An admin panel allows easy product management, while Firebase ensures authentication and real-time data handling.',
        videoId: 'wr96lXelWWs',
        apkLink: 'https://drive.google.com/uc?export=download&id=1kbfhy5VWkgsQ4MiyIQbyTBghLQteVoVd'
    },
    {
        number: '04',
        name: '🛍️ ShopEase Admin Panel - Seamless E-Commerce Management 🛒',
        description: 'The ShopEase Admin Panel is a <strong>powerful back-end system</strong> that empowers e-commerce store owners with effortless product management, real-time order monitoring, and customer insights. Designed with <strong>Flutter and Firebase</strong>, it ensures <strong>secure authentication, smooth UI, and instant updates</strong>. Whether adding new products, tracking sales, or managing user interactions, ShopEase Admin simplifies the entire process. 📦✨<br><br><strong>Note:</strong> Due to <strong>sensitive administrative access</strong>, the APK is not publicly available.',
        videoId: 'Ts8j21MRdEs',
        apkLink: ''
    },
    {
        number: '05',
        name: 'WeatherGlobe 🌍☁️',
        description: 'WeatherGlobe is a Flutter-based weather app that provides real-time forecasts using a free API. With a simple search, users can check temperature, humidity, and conditions for any city instantly. Perfect for trip planning or staying updated, it delivers accurate weather insights anytime.',
        videoId: 'GRoXv7mPhNo',
        apkLink: 'https://example.com/weather_app.apk'
    }
];

function loadProjects() {
    const container = document.getElementById("projects-container");

    projects.forEach((project) => {
        const downloadBtn = project.apkLink
            ? `<a href="${project.apkLink}" class="download-btn mt-4">
                  <i class="fas fa-download mr-2"></i> Download APK
               </a>`
            : `<button class="download-btn mt-4 bg-gray-500 cursor-not-allowed" disabled>
                  <i class="fas fa-ban mr-2"></i> Not Available
               </button>`;

        const projectCard = `
        <div class="project-card">
            <div class="flex items-center gap-3 mb-3">
                <span class="text-cyan-400 font-bold">${project.number}</span>
                <div class="h-px flex-1 bg-gradient-to-r from-cyan-400/20 to-purple-500/20"></div>
            </div>
            
            <h3 class="text-xl font-bold text-white mb-2">${project.name}</h3>
            <p class="text-gray-300 mb-4 text-sm whitespace-pre-line">${project.description}</p>
            
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/${project.videoId}" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen></iframe>
            </div>
            
            ${downloadBtn}
        </div>
        `;
        container.innerHTML += projectCard;
    });
}

// Load projects when page loads
window.addEventListener('DOMContentLoaded', loadProjects);