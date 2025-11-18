// server.js
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// =============== /v5/feed ==================
const feedV5 = {
  "user": {
    "name": "Sidra",
    "notifications": 3
  },
  "continueWatching": [
    {
      "id": "course_uiux_essentials",
      "title": "UI/UX Design Essentials",
      "institute": "Tech Innovations University",
      "rating": 4.9,
      "progress": 79,
      "image": "https://images.unsplash.com/photo-1581091215367-59ab6b90d1e5?auto=format&fit=crop&w=800&q=60"
    },
    {
      "id": "course_graphic_design_fundamentals",
      "title": "Graphic Design Fundamentals",
      "institute": "Creative Arts Institute",
      "rating": 4.7,
      "progress": 35,
      "image": "https://images.unsplash.com/photo-1580894732444-8ecded7900f9?auto=format&fit=crop&w=800&q=60"
    }
  ],
  "categories": [
    { "id": "cat_graphic_design", "name": "Graphic Design" },
    { "id": "cat_user_interface", "name": "User Interface" },
    { "id": "cat_user_experience", "name": "User Experience" },
    { "id": "cat_animation", "name": "Animation" },
    { "id": "cat_game_design", "name": "Game Design" }
  ]
};

// =============== /v5/feed/details ==================
const feedDetailsV5 = {
  "doctor": {
    "id": 201,
    "name": "Dr. Emma Kathrin",
    "speciality": "Cardiologist",
    "qualification": "MBBS",
    "profile_image": "https://images.pexels.com/photos/3714743/pexels-photo-3714743.jpeg",
    "rating": 4.3,
    "reviews_count": 120,
    "years_of_experience": 14,
    "patients_treated": 125,
    "is_favorite": false
  },
  "appointment": {
    "type": "In-Clinic Appointment",
    "fee": 1000,
    "currency": "৳",
    "hospital": {
      "name": "Evercare Hospital Ltd.",
      "location": "Bashundhara, Dhaka",
      "wait_time": "20 mins or less",
      "more_clinics": [
        { "name": "Square Hospital", "location": "Panthapath, Dhaka" },
        { "name": "United Hospital", "location": "Gulshan, Dhaka" }
      ]
    },
    "available_days": [
      { "day": "Today", "slots": [] },
      { "day": "Tomorrow", "slots": ["06:00 - 06:30", "06:30 - 07:00"] },
      { "day": "17 Oct", "slots": ["07:00 - 07:30", "07:30 - 08:00"] }
    ]
  },
  "timing": [
    { "day": "Monday", "time": "09:00 AM - 05:00 PM" },
    { "day": "Tuesday", "time": "Closed" },
    { "day": "Wednesday", "time": "09:00 AM - 05:00 PM" },
    { "day": "Thursday", "time": "09:00 AM - 05:00 PM" },
    { "day": "Friday", "time": "10:00 AM - 02:00 PM" },
    { "day": "Saturday", "time": "09:00 AM - 01:00 PM" },
    { "day": "Sunday", "time": "Closed" }
  ],
  "locations": [
    {
      "area": "Shahbag",
      "hospital": "BSSMU",
      "full_address": "Shahbagh, Dhaka"
    },
    {
      "area": "Bashundhara",
      "hospital": "Evercare",
      "full_address": "Plot 81, Block E"
    },
    {
      "area": "Banani",
      "hospital": "Popular Diagnostic Centre",
      "full_address": "House 11"
    }
  ],
  "tabs": ["Info", "History", "Review"]
};

// =============== ROUTES ==================
app.get('/', (req, res) => {
  res.send('Doctor API running (v5)');
});

app.get('/v5/feed', (req, res) => {
  res.json(feedV5);
});

app.get('/v5/feed/details', (req, res) => {
  res.json(feedDetailsV5);
});

// =============== START SERVER ==================
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
