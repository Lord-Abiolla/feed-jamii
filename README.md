# 🥗 Feed-Jamii

Jamii is a Swahili word meaning “**Community.**”
Therefore, **Feed Jamii** translates to “**Feed the Community.**”

Feed-Jamii is a web application designed to connect food retailers, restaurants, hotels, NGOs, events and other organizations that have surplus food with people in need.

The platform bridges the gap between food donors and recipients, helping reduce food waste while addressing hunger within local communities.

## 🌍 How It Works

A user seeking free food can simply log in, provide their location, and the app will display at least three nearby food joints offering free food.

Upon selecting a preferred location, the map updates dynamically to show directions from the user’s location to the chosen food joint — empowering the user to take the initiative and go grab a free meal.

## ⚙️ Key Features
### 1. 🔐 Authentication

Users must create an account to access the main dashboard.

The registration process requires a username, email, and password, which are currently stored in the browser’s local storage (temporary setup for development).

Upon successful sign-up, the user is redirected to the Sign-In page.

The user logs in using their username and password to access the interactive dashboard.

### 2. 🗺️ Interactive Dashboard

The dashboard serves as the main hub of the web app.
Here, the user provides their current location, which is used to identify the closest free food joints.

Once the nearby locations are displayed:

The user can select a food joint of their choice.

The integrated map updates in real-time, displaying a route from the user’s current position to the chosen destination.

### 🧩 APIs Used

Feed-Jamii integrates the following public APIs for location and mapping data:


```
{ 
  "overpass_api": "https://overpass-api.de/api/interpreter",
  "nominatim": "https://nominatim.openstreetmap.org/search"
}

```


**Overpass API:** This is used to query OpenStreetMap data and retrieve information about food joints or locations offering free food.

**Nominatim API:** This is used for geocoding — converting user-provided addresses or location names into geographic coordinates (latitude and longitude).

## 💡 Future Improvements

- Integration with a backend database for secure user authentication.

- Real-time updates for newly available food donations.

- Notifications to alert users when nearby food opportunities arise.

- Enhanced data visualization and filtering for donors and NGOs.


## 🚀 Usage

You can access the live web application here:
👉 [Feed-Jamii App](https://feed-jamii.vercel.app/)

## 🖥️ Running the App Locally

To run Feed-Jamii locally, you’ll need to clone two repositories — one for the front end and another for the back end.

### 🔹 Repositories

1. Click to open 👉 [Front-End:](https://github.com/Lord-Abiolla/feed-jamii) Repository

2. Click to open 👉 [Back-End:](https://github.com/Lord-Abiolla/feed-jamii_api) Repository

### Note:
The front end is built using React, which cannot directly communicate with the Nominatim and Overpass APIs due to CORS restrictions.

To handle this, a simple Python FastAPI backend acts as a bridge — it communicates with the external APIs, and the React app communicates with the backend.

## ⚙️ Setup Instructions
### 1. Front-End (React)

```
# Clone the repository
git clone https://github.com/Lord-Abiolla/feed-jamii

# Navigate into the project directory
cd feed-jamii

# Install dependencies
npm install

# Run the development server
npm run dev

```
The React app should now be running at:
👉 http://localhost:5173

### Back-End (FastAPI)

```
# Clone the backend repository
git clone https://github.com/Lord-Abiolla/feed-jamii_api

# Navigate into the project directory
cd feed-jamii_api

# Install dependencies
pip install -r requirements.txt

# Run the FastAPI server
uvicorn app.main:app --reload

```
The backend will start running locally, typically at:
👉 http://127.0.0.1:8000

## 🌐 Accessing the App

Once both servers are running:

Open your browser and visit http://localhost:5173

The front end will communicate with your FastAPI backend to fetch and display data.


# Author
**James-Lord Abiolla**