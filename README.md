<div class="hero-icon" align="center">
  <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
</div>

<h1 align="center">
fitness-journey-platform
</h1>
<h4 align="center">A comprehensive web application for fitness enthusiasts to manage their fitness journey, set goals, track progress, and connect with a supportive community.</h4>
<h4 align="center">Developed with the software and tools below.</h4>
<div class="badges" align="center">
  <img src="https://img.shields.io/badge/Framework-Next.js-blue" alt="">
  <img src="https://img.shields.io/badge/Frontend-TypeScript,_React,_HTML,_CSS-red" alt="">
  <img src="https://img.shields.io/badge/Backend-Node.js,_Express.js-blue" alt="">
  <img src="https://img.shields.io/badge/Database-PostgreSQL-black" alt="">
</div>
<div class="badges" align="center">
  <img src="https://img.shields.io/github/last-commit/spectra-ai-codegen/fitness-journey-platform?style=flat-square&color=5D6D7E" alt="git-last-commit" />
  <img src="https://img.shields.io/github/commit-activity/m/spectra-ai-codegen/fitness-journey-platform?style=flat-square&color=5D6D7E" alt="GitHub commit activity" />
  <img src="https://img.shields.io/github/languages/top/spectra-ai-codegen/fitness-journey-platform?style=flat-square&color=5D6D7E" alt="GitHub top language" />
</div>

## 📑 Table of Contents
- 📍 Overview
- 📦 Features
- 📂 Structure
- 💻 Installation
- 🏗️ Usage
- 🌐 Hosting
- 📄 License
- 👏 Authors

## 📍 Overview
This repository houses the Minimum Viable Product (MVP) for a web application named "fitness-journey-platform," designed to empower fitness enthusiasts by providing a platform to manage their fitness journey. This MVP leverages a robust technology stack including React, TypeScript, Next.js, Express.js, PostgreSQL, and Tailwind CSS. It prioritizes user-centric design, seamless integration, and robust functionality.

## 📦 Features
|    | Feature            | Description                                                                                                        |
|----|--------------------|--------------------------------------------------------------------------------------------------------------------|
| 🎯 | **Goal Setting**   | Users can define personalized fitness goals (e.g., weight loss, muscle gain) with target dates and track their progress towards them. |
| 🏋️ | **Workout Tracking** | Users can log their workouts, including details like type, duration, intensity, and calories burned.   |
| 🍽️ | **Meal Tracking**   | Users can track their daily meals, logging calorie content, macronutrients, and food type to monitor their dietary intake.    |
| 👥 | **Social Sharing**  | Users can connect with friends and fellow fitness enthusiasts, share their progress updates, and motivate each other.       |
| ✨ | **User Interface**   | A visually appealing and user-friendly interface built with React and Tailwind CSS ensures a smooth and intuitive user experience.    |
| 🔐 | **Authentication**  |  Secure user authentication is implemented using NextAuth.js, allowing users to log in using email/password or social media accounts. |
| 🗃️ | **Data Storage**    |  User data, workout logs, and meal information are securely stored in a PostgreSQL database. |
| 📈 | **Progress Visualization** | The application utilizes data visualization techniques to display user progress towards their goals in an easy-to-understand manner. |
| 🌐 | **Scalability**     | The application is designed to handle increased user demand and data volume, ensuring efficient performance and stability. |

## 📂 Structure
```text
fitness-journey-platform/
├── pages
│   ├── api
│   │   ├── workouts.ts
│   │   └── meals.ts
│   ├── workout-log
│   │   └── page.tsx
│   ├── meal-tracker
│   │   └── page.tsx
│   ├── profile
│   │   └── page.tsx
│   ├── settings
│   │   └── page.tsx
│   ├── goals
│   │   └── page.tsx
│   └── index.tsx
├── components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Navigation.tsx
│   ├── GoalCard.tsx
│   ├── WorkoutCard.tsx
│   ├── MealCard.tsx
│   ├── ProgressChart.tsx
│   ├── SocialFeed.tsx
│   ├── UserCard.tsx
│   └── LoginForm.tsx
├── styles
│   ├── globals.css
│   └── themes.css
├── prisma
│   ├── schema.prisma
│   └── migrations
│       └── 20231027123412_init
│           ├── migration.sql
│           └── _meta.json
├── utils
│   ├── db.ts
│   ├── auth.ts
│   └── helpers.ts
├── next.config.mjs
├── tailwind.config.js
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

## 💻 Installation
### 🔧 Prerequisites
- Node.js (LTS version recommended)
- npm or yarn

### 🚀 Setup Instructions
1. Clone the repository:
   - `git clone https://github.com/spectra-ai-codegen/fitness-journey-platform.git`
2. Navigate to the project directory:
   - `cd fitness-journey-platform`
3. Install dependencies:
   - `npm install`

## 🏗️ Usage
### 🏃‍♂️ Running the Development Server
1. Start the development server:
   - `npm run dev`
2. Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

### ⚙️ Configuration
- **Environment Variables:** Set environment variables for database connection details (e.g., `DATABASE_URL`, `DATABASE_USER`, `DATABASE_PASSWORD`) in a `.env` file at the root of the project.

### 📚 Examples
- **Setting a Weight Loss Goal:** Users can input their desired weight loss target, timeframe, and track their progress through workout and meal logging.
- **Tracking Workout Progress:** Users can record details of their workouts (e.g., duration, type, intensity) and view their progress over time.
- **Sharing a Fitness Achievement:** Users can share their achievements (e.g., new personal best) with friends and followers within the social feed.

## 🌐 Hosting
### 🚀 Deployment Instructions
#### Vercel
1. Login to your Vercel account.
2. Import the project using the Vercel CLI or their website.
3. Configure environment variables for your database connection.
4. Deploy the application.

#### Netlify
1. Login to your Netlify account.
2. Import the project using the Netlify CLI or their website.
3. Configure environment variables for your database connection.
4. Deploy the application.

#### Heroku
1. Install the Heroku CLI: `npm install -g heroku`
2. Login to Heroku: `heroku login`
3. Create a new Heroku app: `heroku create`
4. Set environment variables for your database connection.
5. Deploy the application: `git push heroku main`

## 📜 API Documentation
### 🔍 Endpoints
- **GET /api/workouts:** Retrieves a list of user's workouts.
- **POST /api/workouts:** Creates a new workout entry.
- **GET /api/meals:** Retrieves a list of user's meals.
- **POST /api/meals:** Creates a new meal entry.
- **GET /api/users:** Retrieves user data.
- **POST /api/users:** Creates a new user account.

### 🔒 Authentication
- The API uses JSON Web Tokens (JWT) for user authentication.
- Users can authenticate using email/password or social media logins via NextAuth.js.

### 📝 Examples
```bash
# Retrieve user's workouts
curl -X GET http://localhost:3000/api/workouts

# Create a new workout entry
curl -X POST http://localhost:3000/api/workouts -H "Content-Type: application/json" -d '{"name": "Running", "duration": 30, "intensity": "Moderate"}'
```

## 📜 License
This project is licensed under the [GNU AGPLv3](https://choosealicense.com/licenses/agpl-3.0/).

## 👥 Authors
- **Author Name** - [Spectra.codes](https://spectra.codes)
- **Creator Name** - [DRIX10](https://github.com/Drix10)

<p align="center">
  <h1 align="center">🌐 Spectra.Codes</h1>
</p>
<p align="center">
  <em>Why only generate Code? When you can generate the whole Repository!</em>
</p>
<div class="badges" align="center">
<img src="https://img.shields.io/badge/Developer-Drix10-red" alt="">
<img src="https://img.shields.io/badge/Website-Spectra.codes-blue" alt="">
<img src="https://img.shields.io/badge/Backed_by-Google,_Microsoft_&_Amazon_for_Startups-red" alt="">
<img src="https://img.shields.io/badge/Finalist-Backdrop_Build_v4-black" alt="">
</div>