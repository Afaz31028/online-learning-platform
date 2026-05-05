# 📚 Online Learning Platform

An interactive and fully responsive **Online Learning Platform** built with modern web technologies. Users can explore courses, view instructors, and manage their profiles with secure authentication.

---

## 🔗 Live Demo

👉 (https://online-learning-platform-psi-peach.vercel.app/)

---

## 🚀 Tech Stack

- **Frontend:** React.js, Next.js  
- **Styling:** Tailwind CSS  
- **Backend/Database:** MongoDB  
- **Authentication:** Better-Auth (with Google Sign-In)

---

## ✨ Features

### 🌐 Public Access
- Browse the Home Page without logging in
- View top courses, instructors, and study tips

### 🔐 Authentication
- **Sign Up** with:
  - Name
  - Email
  - Image URL
  - Password
- **Sign In** with:
  - Email & Password
- Google authentication supported
- Protected routes for course details and curriculum

---

## 🏠 Pages & Structure

### 🔹 Home Page
- Navbar
- Banner section
- Top 3 Courses (card layout)
- Study Techniques & Tips (2 cards)
- Popular Instructors (cards)
- Footer

---

### 📖 All Courses Page
- Displays all courses
- Search bar to filter by course title
- Responsive course card layout

---

### 👤 My Profile
- Displays:
  - Profile image
  - User name
  - Email
- Profile update feature:
  - Opens a modal
  - Update name and image

---

### 🔑 Authentication Pages

#### Sign In
- Email
- Password

#### Sign Up
- User Name
- Email
- Image URL
- Password

---

## 📘 Course Details System

- Clicking a course redirects to a dynamic layout page

### Layout Structure:
- **Sidebar:**
  - Course Details
  - Instructor Details
  - Course Curriculum

- **Main Content:**
  - Dynamically updates based on selected sidebar option

⚠️ Login required to access course details and curriculum.

---

## 📱 Responsiveness

Fully responsive for:
- Mobile 📱
- Tablet 📲
- Desktop 💻

---

## 🛡️ Access Control

| Feature             | Without Login | With Login  |
|--------------------|----------------|-------------|
| Home Page          |    ✅          |    ✅       |
| All Courses        |    ✅          |    ✅       |
| Course Details     |    ❌          |    ✅       |
| Course Curriculum  |    ❌          |    ✅       |
| Profile            |    ❌          |    ✅       |


---
Used Npm Packages
  - better-auth/mongo-adapter
  - animate.css
  - better-auth
  - mongodb"
  - motion
  - react-dom
  - react-icons
  - react-spinners
  - react-toastify
---

## 📦 Installation & Setup

# Clone the repository
git clone [https://github.com/Afaz31028/online-learning-platform.git]

# Go to project folder
cd online-learning-platform

# Install dependencies
npm install

# Run development server
npm run dev
