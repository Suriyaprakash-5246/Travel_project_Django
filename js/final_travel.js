// JavaScript for opening and closing modals
document.getElementById('signupBtn').onclick = function() {
  document.getElementById('signUpForm').style.display = 'block';
}

document.getElementById('loginBtn').onclick = function() {
  document.getElementById('loginModal').style.display = 'block';
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = 'none';
  }
}

// Update country input field based on dropdown selection
function updateCountry() {
  const countryDropdown = document.getElementById('countryDropdown');
  const countryInput = document.getElementById('country');
  countryInput.value = countryDropdown.value;
}


document.addEventListener('DOMContentLoaded', function() {
  const journeyOverlays = document.querySelectorAll('.journey .overlay');
  journeyOverlays.forEach(overlay => {
    overlay.parentElement.addEventListener('mouseover', function() {
      overlay.style.opacity = '1';
    });
    overlay.parentElement.addEventListener('mouseout', function() {
      overlay.style.opacity = '0';
    });
  });
});
function openSignUpForm() {
  document.getElementById('signUpForm').style.display = 'block';
}

function closeSignUpForm() {
  document.getElementById('signUpForm').style.display = 'none';
}

function signUp() {
  openSignUpForm();
}

function login() {
  alert('Login button clicked!');
}

function updateCountry() {
  const dropdown = document.getElementById('countryDropdown');
  const countryInput = document.getElementById('country');
  countryInput.value = dropdown.value;
}

document.addEventListener('DOMContentLoaded', function() {
  const journeyOverlays = document.querySelectorAll('.journey .overlay');
  journeyOverlays.forEach(overlay => {
    overlay.parentElement.addEventListener('mouseover', function() {
      overlay.style.opacity = '1';
    });
    overlay.parentElement.addEventListener('mouseout', function() {
      overlay.style.opacity = '0';
    });
  });
});

const attractions = {
  "Kerala": [
    { "name": "Munnar", "description": "Misty hills, tea plantations, waterfalls, and breathtaking panoramic views.", "image": "munnar.jpg" },
    { "name": "Alleppey", "description": "Serene backwaters, houseboats, coconut palms, and tranquil village life.", "image": "alleppey.jpg" },
    { "name": "Thekkady", "description": "Periyar Wildlife Sanctuary, elephants, spice plantations, and nature-filled trekking.", "image": "thekkady.jpg" },
    { "name": "Kochi", "description": "Historic Fort Kochi, Chinese fishing nets, museums, and vibrant cultural heritage.", "image": "kochi.jpg" },
    { "name": "Varkala", "description": "Stunning cliffs, pristine beaches, temples, and an enchanting spiritual ambiance.", "image": "varkala.jpg" }
  ],
  "Tamil Nadu": [
    { "name": "Chennai", "description": "Marina Beach, Kapaleeshwarar Temple, cultural hubs, and iconic colonial landmarks.", "image": "chennai.jpg" },
    { "name": "Mahabalipuram", "description": "Shore Temple, ancient rock carvings, beaches, and UNESCO World Heritage recognition.", "image": "mahabalipuram.jpg" },
    { "name": "Kodaikanal", "description": "Cool climate, misty mountains, serene lakes, and lush forested trails.", "image": "kodaikanal.jpg" },
    { "name": "Madurai", "description": "Meenakshi Temple, vibrant bazaars, historic structures, and spiritual charm.", "image": "madurai.jpg" },
    { "name": "Ooty", "description": "Verdant hills, Nilgiri Mountain Railway, botanical gardens, and mesmerizing vistas.", "image": "ooty.jpg" }
  ],
  "Punjab": [
    { "name": "Amritsar", "description": "Golden Temple, spiritual solace, cultural richness, and vibrant community spirit.", "image": "amritsar.jpg" },
    { "name": "Chandigarh", "description": "Rock Garden, Sukhna Lake, planned architecture, and green open spaces.", "image": "chandigarh.jpg" },
    { "name": "Patiala", "description": "Qila Mubarak, royal heritage, colorful traditions, and exquisite handcrafted jewelry.", "image": "patiala.jpg" },
    { "name": "Ludhiana", "description": "Rural museum, industrial hub, historic Gurudwaras, and dynamic textile trade.", "image": "ludhiana.jpg" },
    { "name": "Wagah Border", "description": "Patriotic ceremony, electrifying atmosphere, Indo-Pak border, and emotional unity.", "image": "wagahborder.jpg" }
  ],
  "Rajasthan": [
    { "name": "Jaipur", "description": "Amber Fort, royal palaces, bustling bazaars, and rich pink hues.", "image": "jaipur.jpg" },
    { "name": "Jaisalmer", "description": "Golden Fort, Thar Desert, camel safaris, and stunning sunset views.", "image": "jaisalmer.jpg" },
    { "name": "Udaipur", "description": "City of Lakes, picturesque palaces, serene waters, and romantic ambiance.", "image": "udaipur.jpg" },
    { "name": "Pushkar", "description": "Holy lake, vibrant fair, Brahma Temple, and spiritual tranquility.", "image": "pushkar.jpg" },
    { "name": "Mount Abu", "description": "Aravalli Hills, Dilwara Temples, Nakki Lake, and refreshing cool climate.", "image": "mountabu.jpg" }
  ],
  "Karnataka": [
    { "name": "Bengaluru", "description": "IT hub, Cubbon Park, historic landmarks, and bustling modernity fusion.", "image": "bengaluru.jpg" },
    { "name": "Mysuru", "description": "Mysore Palace, cultural festivals, Chamundi Hills, and rich royal legacy.", "image": "mysuru.jpg" },
    { "name": "Hampi", "description": "Ancient ruins, UNESCO World Heritage site, boulders, and fascinating history.", "image": "hampi.jpg" },
    { "name": "Coorg", "description": "Coffee plantations, misty hills, waterfalls, and serene nature experiences.", "image": "coorg.jpg" },
    { "name": "Gokarna", "description": "Pristine beaches, temple town, peaceful vibes, and serene coastal charm.", "image": "gokarna.jpg" }
  ],
  "Andhra Pradesh": [
    { "name": "Tirupati", "description": "Balaji Temple, sacred pilgrimage, divine blessings, and serene spiritual atmosphere.", "image": "tirupati.jpg" },
    { "name": "Araku Valley", "description": "Green valleys, coffee plantations, tribal culture, and refreshing cool climate.", "image": "arakuvalley.jpg" },
    { "name": "Visakhapatnam", "description": "Beaches, Kailasagiri Hill, submarine museum, and scenic coastal allure.", "image": "visakhapatnam.jpg" },
    { "name": "Lepakshi", "description": "Architectural brilliance, Nandi sculpture, murals, and historical Vijayanagara essence.", "image": "lepakshi.jpg" },
    { "name": "Srikalahasti", "description": "Ancient temples, spiritual significance, artistic details, and divine Hindu mythology.", "image": "srikalahasti.jpg" }
  ],
  "Ladakh": [
    { "name": "Pangong Lake", "description": "Turquoise waters, rugged mountains, peaceful surroundings, and cinematic beauty.", "image": "pangonglake.jpg" },
    { "name": "Leh Palace", "description": "Historic palace, Buddhist culture, panoramic views, and ancient architectural marvels.", "image": "lehpalace.jpg" },
    { "name": "Nubra Valley", "description": "Sand dunes, double-humped camels, monasteries, and picturesque Himalayan landscapes.", "image": "nubravalley.jpg" },
    { "name": "Zanskar Valley", "description": "Adventurous trekking, snow-capped peaks, frozen river, and scenic isolation.", "image": "zanskarvalley.jpg" },
    { "name": "Magnetic Hill", "description": "Gravity-defying illusion, surreal landscape, curious phenomenon, and mesmerizing road experience.", "image": "magnetichill.jpg" }
  ],
  "Mumbai": [
    { "name": "Gateway of India", "description": "Iconic archway, colonial history, bustling tourists, and sea views.", "image": "gatewayofindia.jpg" },
    { "name": "Marine Drive", "description": "Coastal promenade, sunset views, city lights, and calming sea breeze.", "image": "marinedrive.jpg" },
    { "name": "Elephanta Caves", "description": "Ancient carvings, UNESCO site, cultural wonder, and mysterious rock sculptures.", "image": "elephantacaves.jpg" },
    { "name": "Colaba Causeway", "description": "Street shopping, lively bazaars, cafes, and vibrant city experience.", "image": "colabacauseway.jpg" },
    { "name": "Juhu Beach", "description": "Iconic beach, street food, Bollywood vibes, and fun family outings.", "image": "juhubeach.jpg" }
  ],
  "Assam": [
    { "name": "Kaziranga National Park", "description": "One-horned rhinos, lush greenery, wildlife safaris, and natural biodiversity.", "image": "kaziranga.jpg" },
    { "name": "Majuli", "description": "Largest river island, cultural heritage, serene beauty, and vibrant festivals.", "image": "majuli.jpg" },
    { "name": "Guwahati", "description": "Kamakhya Temple, Brahmaputra River, cityscape, and religious significance.", "image": "guwahati.jpg" },
    { "name": "Sivasagar", "description": "Historical monuments, Ahom architecture, palaces, and remnants of royal heritage.", "image": "sivasagar.jpg" },
    { "name": "Tezpur", "description": "Scenic landscapes, ancient temples, cultural legacy, and poetic charm.", "image": "tezpur.jpg" }
  ]
};

function displayAttraction() {
  const place = document.getElementById('places').value;
  const attractionDetails = document.getElementById('attraction-details');
  
  if (place) {
    const randomAttraction = getRandomAttraction(attractions[place]);
    attractionDetails.innerHTML = `
      <img src="${randomAttraction.image}" alt="${randomAttraction.name}">
      <h3>${randomAttraction.name}</h3>
      <p>${randomAttraction.description}</p>
    `;
  } else {
    attractionDetails.innerHTML = '';
  }
}

function getRandomAttraction(attractionList) {
  const randomIndex = Math.floor(Math.random() * attractionList.length);
  return attractionList[randomIndex];
}
// Function to display all attractions for the selected place
function displayAttraction() {
  const place = document.getElementById('places').value;
  const attractionDetails = document.getElementById('attraction-details');
  
  if (place && attractions[place]) {
    let attractionHTML = '';  // Start with an empty string to store all the attraction details
    
    // Loop through each attraction and add it to the HTML string
    attractions[place].forEach(attraction => {
      attractionHTML += `
        <div class="attraction">
          <img src="${attraction.image}" alt="${attraction.name}">
          <h3>${attraction.name}</h3>
          <p>${attraction.description}</p>
        </div>
      `;
    });

    // Update the attraction details section with all the attractions
    attractionDetails.innerHTML = attractionHTML;
  } else {
    attractionDetails.innerHTML = '<p>Please select a valid place from the dropdown.</p>';
  }
}
