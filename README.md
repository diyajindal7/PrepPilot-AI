

## Live Demo
https://prep-pilot-ai-sand.vercel.app/

# 🚀 PrepPilot AI

**AI-Powered Placement Preparation Platform**

PrepPilot AI is a full-stack AI-powered platform designed to help students improve their placement readiness through ATS resume analysis, job description matching, interview question generation, and progress tracking.

The platform leverages Google's Gemini AI to provide personalized feedback and interview preparation assistance, helping students identify skill gaps and improve their chances of securing internships and full-time roles.

---

## 🌟 Features

### 📄 ATS Resume Analysis

* Upload resumes in PDF format
* AI-powered resume evaluation
* ATS compatibility assessment
* Suggestions for resume improvement

### 🎯 Job Description Matching

* Compare resumes against job descriptions
* Identify missing skills and keywords
* Match score generation
* Personalized improvement recommendations

### 🤖 AI Interview Preparation

* Generate role-specific interview questions
* Technical and behavioral question suggestions
* Personalized interview preparation support

### 📊 Progress Dashboard

* Track ATS analyses performed
* Monitor job match analyses
* View interview preparation activity
* Overall placement preparation statistics

### 📝 History Tracking

* Store previous analyses
* Access past ATS reports
* Review previous interview questions
* Track preparation progress over time

### 🔐 Authentication System

* User registration and login
* JWT-based authentication
* Secure user sessions
* Personalized dashboards

---

## 🏗️ System Architecture

```text
Frontend (React + Vite)
          ↓
     Axios API Calls
          ↓
Backend (Node.js + Express)
          ↓
     Gemini AI API
          ↓
MongoDB Atlas Database
```

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* Axios
* React Router DOM
* React Markdown

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

### AI Integration

* Google Gemini API
* Prompt Engineering
* Resume Analysis
* Job Match Evaluation

### Authentication

* JWT (JSON Web Tokens)
* bcryptjs

### File Processing

* Multer
* PDF-Parse

### Deployment

* Vercel (Frontend)
* Render (Backend)

### Development Tools

* Git
* GitHub
* VS Code

---

## 🚀 Live Demo

Frontend:
https://prep-pilot-ai-sand.vercel.app/

Backend:
https://preppilot-ai-e8yc.onrender.com/

---

## 📦 Installation

### Clone Repository

```bash
git clone https://github.com/diyajindal7/PrepPilot-AI.git
cd PrepPilot-AI
```

### Backend Setup

```bash
cd server
npm install
npm run dev
```

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file in the server directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_api_key
```

Create a `.env` file in the client directory:

```env
VITE_API_URL=https://your-backend-url/api
```

---

## 🎯 Future Enhancements

* Mock Interview Voice Assistant
* AI Resume Builder
* Company-Specific Interview Preparation
* Placement Roadmap Generator
* Performance Analytics Charts
* Email Notifications

---

## 👨‍💻 Author

**Diya Jindal**

Computer Science Engineering Student

---

## 📄 License

This project is developed for educational and portfolio purposes.

