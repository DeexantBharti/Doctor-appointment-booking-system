# 🩺 DocEasy – Doctor Appointment Booking System

DocEasy is a full-stack web application that allows patients to book appointments with doctors and provides an intuitive admin dashboard to manage doctors, appointments, and patient feedback. It streamlines the booking process and improves accessibility to healthcare professionals.

---

## 🌐 Live Demo

[🔗 Visit DocEasy Live](https://doceasy-site.onrender.com/) *(optional)*

---

## 🛠️ Tech Stack

- **Frontend**: React.js, Tailwind CSS, React Router
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT-based for both users and admins
- **Other Libraries**:
  - Axios (HTTP Requests)
  - React Hot Toast (Notifications)
  - React Quill (Rich text editor for blogs)
  - dotenv, cors, bcryptjs


---

## 🔐 Features

### 👩‍⚕️ For Users (Patients)
- Register and login with secure JWT authentication.
- View list of available doctors with filters (specialization, availability).
- Book appointments with a doctor.
- View user dashboard and booking history.
- Profile management.

### 🧑‍💼 For Admins
- Login to secure admin panel.
- Add, edit, and delete doctor profiles.
- View all user appointments and feedback.
- Manage blog posts or announcements.
- Monitor overall system analytics (optional).

### 👨‍⚕️ For Doctors
Secure login to personalized doctor dashboard (optional based on project scope).

View and manage their upcoming patient appointments.

Update availability status (e.g., Available / Not Available).

Edit their profile details such as specialization, working hours, and image.


---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/DeexantBharti/Doctor-appointment-booking-system.git


🔒 Authentication Flow
Tokens are stored in localStorage (token for admin, uToken for user).

Protected routes conditionally render based on token presence.


🤝 Contributing
Fork the project

Create your feature branch: git checkout -b feat/YourFeature

Commit your changes

Push and create a Pull Request

