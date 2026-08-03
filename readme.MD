# AI Interview Preparation Platform

An AI-powered Interview Preparation Platform that helps candidates analyze their profile, identify skill gaps, and prepare for interviews with personalized technical questions, behavioral questions, and an AI-generated preparation roadmap.

---

## Features

- User Authentication (Register/Login)
- Protected Routes using JWT
- AI-powered Interview Report Generation
- Match Score Analysis
- Technical Interview Questions
- Behavioral Interview Questions
- Skill Gap Analysis
- Personalized 8-Week Preparation Plan
- Save Reports to MongoDB
- View Generated Interview Reports
- Modern Responsive UI

---
---
## Tech Stack

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

## Project Structure

```
Interview-Preparation-Platform
│
├── Backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middleware
│   ├── services
│   ├── config
│   └── server.js
│
├── Frontend
│   ├── src
│   │   ├── features
│   │   ├── style
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/Akshit-Singh-00/Interview-Ai.git
```

```
cd Interview-Ai
```

---

### Backend Setup

```
cd Backend
npm install
```

Create a `.env` file

```
PORT=3000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

GOOGLE_GENAI_API_KEY=your_google_api_key
```

Run Backend

```
npm run dev
```

---

### Frontend Setup

```
cd Frontend
npm install
npm run dev
```

---

## AI Report Includes

- Match Score
- Technical Questions
- Behavioral Questions
- Skill Gap Analysis
- Personalized 8-Week Preparation Plan

---

## Future Improvements

- Resume PDF Upload
- Download Report as PDF
- Dashboard Analytics
- Interview History
- AI Chat Assistant
- Mock Interview Mode
- Email Reports
- Dark/Light Theme

---

## API Endpoints

### Authentication

```
POST   /api/auth/register
POST   /api/auth/login
GET    /api/auth/logout
GET    /api/auth/get-me
```

### Interview

```
POST   /api/interview/generate
GET    /api/interview
GET    /api/interview/:id
DELETE /api/interview/:id
```

---

## How It Works

1. User registers or logs in.
2. User enters:
   - Resume
   - Self Description
   - Job Description
3. Gemini AI analyzes the profile.
4. AI generates:
   - Match Score
   - Technical Questions
   - Behavioral Questions
   - Skill Gap Analysis
   - 8-Week Preparation Plan
5. Report is stored in MongoDB.
6. User can view the generated report.


