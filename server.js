const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

// ===================== DATA V1 =====================
const feedV1 = {
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
    {"id": "cat_graphic_design", "name": "Graphic Design"},
    {"id": "cat_user_interface", "name": "User Interface"},
    {"id": "cat_user_experience", "name": "User Experience"},
    {"id": "cat_animation", "name": "Animation"},
    {"id": "cat_game_design", "name": "Game Design"}
  ],
  "suggestions": [
    {
      "id": "course_typography_layout",
      "title": "Typography and Layout Design",
      "institute": "Visual Communication College",
      "rating": 4.7,
      "image": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=60"
    },
    {
      "id": "course_branding_identity",
      "title": "Branding and Identity Design",
      "institute": "Innovation and Design School",
      "rating": 4.4,
      "image": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=60"
    },
    {
      "id": "course_web_design_fundamentals",
      "title": "Web Design Fundamentals",
      "institute": "Web Development Lab",
      "rating": 4.9,
      "image": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=60"
    }
  ],
  "topCourses": [
    {
      "id": "course_motion_graphics",
      "title": "Animation and Motion Graphics",
      "institute": "Animation Institute of Digital Arts",
      "rating": 4.7,
      "image": "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=800&q=60"
    },
    {
      "id": "course_game_design_dev",
      "title": "Game Design and Development",
      "institute": "Game Development Academy",
      "rating": 4.4,
      "image": "https://images.unsplash.com/photo-1590608897129-79da98d159e9?auto=format&fit=crop&w=800&q=60"
    },
    {
      "id": "course_product_design_innovation",
      "title": "Product Design and Innovation",
      "institute": "Product Design Institute",
      "rating": 4.9,
      "image": "https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=800&q=60"
    }
  ]
};


// ===================== DATA V5 DETAILS =====================
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
        {"name": "Square Hospital", "location": "Panthapath, Dhaka"},
        {"name": "United Hospital", "location": "Gulshan, Dhaka"}
      ]
    },
    "available_days": [
      {"day": "Today", "slots": []},
      {"day": "Tomorrow", "slots": ["06:00 - 06:30", "06:30 - 07:00"]},
      {"day": "17 Oct", "slots": ["07:00 - 07:30", "07:30 - 08:00"]}
    ]
  },
  "timing": [
    {"day": "Monday", "time": "09:00 AM - 05:00 PM"},
    {"day": "Tuesday", "time": "Closed"},
    {"day": "Wednesday", "time": "09:00 AM - 05:00 PM"},
    {"day": "Thursday", "time": "09:00 AM - 05:00 PM"},
    {"day": "Friday", "time": "10:00 AM - 02:00 PM"},
    {"day": "Saturday", "time": "09:00 AM - 01:00 PM"},
    {"day": "Sunday", "time": "Closed"}
  ],
  "locations": [
    {
      "area": "Shahbag",
      "hospital": "BSSMU - Bangabandhu Sheikh Mujib Medical University",
      "full_address": "Shahbagh, Dhaka"
    },
    {
      "area": "Bashundhara",
      "hospital": "Evercare Hospital Ltd.",
      "full_address": "Plot 81, Block E, Bashundhara R/A, Dhaka"
    },
    {
      "area": "Banani",
      "hospital": "Popular Diagnostic Centre",
      "full_address": "House 11, Road 2, Banani, Dhaka"
    }
  ],
  "tabs": ["Info", "History", "Review"]
};


// ===================== ROUTES =====================
app.get('/v5/feed', (req, res) => {
  res.json(feedV1);
});

app.get('/v5/feed/details', (req, res) => {
  res.json(feedDetailsV5);
});


// ===================== SERVER START =====================
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
