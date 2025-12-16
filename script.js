// Define all the tourist spots with their coordinates, descriptions, and image URLs.
const touristSpots = [
    {
        name: "Calle Crisologo",
        lat: 17.5714,
        lng: 120.3887,
        description: "A UNESCO World Heritage Site famous for its Spanish colonial architecture and cobblestone streets. It is the heart of Vigan's historical center.",
        imageUrl: "images/callecrisologo.jpg" 
    },
    {
        name: "Vigan Cathedral (St. Paul Metropolitan Cathedral)",
        lat: 17.5749,
        lng: 120.3889,
        description: "The massive, baroque-style church dominates Plaza Salcedo and Plaza Burgos. It features a separate bell tower typical of earthquake-resistant design.",
        imageUrl: "images/vigan_cathedral.jpg" 
    },
    {
        name: "Plaza Salcedo (Dancing Fountain)",
        lat: 17.5755,
        lng: 120.3877,
        description: "Known for its dancing fountain shows in the evening, this plaza is a central hub and a great place to relax near the Cathedral and City Hall.",
        imageUrl: "images/plaza_salcedo.jpg"
    },
    {
        name: "Plaza Burgos",
        lat: 17.5743,
        lng: 120.3888,
        description: "Named after the martyr Fr. Jose Burgos, this plaza is the go-to place for local delicacies like the Vigan Empanada and Okoy.",
        imageUrl: "images/plaza_burgos.jpg"
    },
    {
        name: "Baluarte Zoo",
        lat: 17.5513,
        lng: 120.3771,
        description: "An interactive zoo owned by former Governor Chavit Singson. Famous for its mini-safari experience and the unique realistic tiger enclosure.",
        imageUrl: "images/baluarte2.jpg" 
    },
    {
        name: "Pagburnayan (Jar Making)",
        lat: 17.5709,
        lng: 120.3820,
        description: "A traditional pottery site where local artisans demonstrate the age-old method of making *burnay*, a local earthenware jar, by hand.",
        imageUrl: "images/pagburnayan2.jpg"
    },
    {
        name: "Hidden Garden",
        lat: 17.5597,
        lng: 120.3651,
        description: "A tranquil sanctuary known for its lush plant nursery, garden cafe, and Ilocano food, offering a peaceful escape from the city hustle.",
        imageUrl: "images/hiddengarden.jpg"
    },
    {
        name: "National Museum - Ilocos Regional Museum Complex",
        lat: 17.5756,
        lng: 120.3858,
        description: "Located in the ancestral house of former President Elpidio Quirino, the museum showcases Ilocano culture, history, and artifacts.",
        imageUrl: "images/national_museum.jpg"
    },
    {
        name: "One Ilocos Sur Cafe",
        lat: 17.5765,
        lng: 120.3868,
        description: "A popular modern cafe and restaurant offering a mix of local Ilocano cuisine and contemporary coffee drinks.",
        imageUrl: "images/oneilocossurcafe.jpg"
    }
];

// 1. Initialize the map
// The coordinates for Vigan City center
const viganCenter = [17.565, 120.380]; 
const map = L.map('map').setView(viganCenter, 14); // 'map' is the ID of the div, 15 is the zoom level

// 2. Add OpenStreetMap tiles (this is what renders the map image)
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    // IMPORTANT: You must provide attribution for using OpenStreetMap data
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// 3. Loop through the spots and place markers
touristSpots.forEach(spot => {
    const marker = L.marker([spot.lat, spot.lng]).addTo(map)
        .bindTooltip(spot.name, { permanent: false, direction: 'top' }); // Optional: Show name on hover

    // Add a click listener to each marker
    marker.on('click', () => {
        // Center the map on the clicked marker
        map.panTo([spot.lat, spot.lng]);
        // Call the function to update the info panel with the spot's details
        updateInfoPanel(spot);
    });
});

// Function to update the HTML content of the info panel
function updateInfoPanel(spot) {
    const detailsPanel = document.getElementById('spot-details');

    detailsPanel.innerHTML = `
        <h3>${spot.name}</h3>
        <img id="spot-image" src="${spot.imageUrl}" alt="Image of ${spot.name}">
        <p>${spot.description}</p>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
});