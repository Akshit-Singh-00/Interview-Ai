# AI Interview Preparation Platform

An AI-powered Interview Preparation Platform that helps users prepare for technical interviews by analyzing their profile and generating personalized interview reports using Google Gemini AI.

---

## 🌐 Live Demo

Coming Soon (Deployment in Progress)

---

## Features

- User Registration & Login (JWT Authentication)
- Protected Routes
- AI-powered Interview Report Generation
- Match Score Analysis
- Technical Interview Questions
- Behavioral Interview Questions
- Skill Gap Analysis
- Personalized 8-Week Preparation Plan
- Stores Generated Reports in MongoDB
- View Generated Interview Report

---

## 🛠 Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- SCSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt.js
- Cookie Parser

### AI
- Google Gemini API

---

## API Endpoints

### Authentication

POST /api/auth/register

POST /api/auth/login

GET /api/auth/logout

GET /api/auth/get-me

### Interview

POST /api/interview/generate

GET /api/interview

GET /api/interview/:id

DELETE /api/interview/:id

---

## Future Enhancements

- Resume PDF Upload
- Download Interview Report as PDF
- Interview History Page
- Dashboard & Analytics
- Dark/Light Theme
- AI Mock Interview
- Email Report Sharing