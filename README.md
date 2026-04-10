# Zerodha IU WebApp (IU UNIVERSITY, GERMANY)

A comprehensive web application simulating the Zerodha trading platform, built as a university project. This application provides a full-stack solution for stock trading simulation, including portfolio management, order placement, and real-time data visualization.

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Authors](#authors)

## Features

- **User Authentication**: Sign up and login system with form validation
- **User Dashboard**: Interactive dashboard with portfolio overview, holdings, and positions
- **Stock Trading Simulation**: Place buy/sell orders with real-time updates
- **Portfolio Management**: Track holdings, positions, and order history
- **Data Visualization**: Charts and graphs for portfolio performance using Chart.js
- **Responsive Design**: Mobile-friendly UI built with Material-UI
- **Real-time Data**: Fetch and display stock data (simulated)
- **Order Management**: Create, view, and manage trading orders
- **Watchlist**: Monitor favorite stocks
- **User Profile**: View user information and logout functionality

## Technology Stack

### Frontend
- **React**: JavaScript library for building user interfaces
- **Material-UI (MUI)**: React components implementing Google's Material Design
- **Chart.js & React-Chartjs-2**: Data visualization library
- **Axios**: HTTP client for API requests
- **React Router**: Declarative routing for React

### Backend
- **Node.js**: JavaScript runtime for server-side development
- **Express.js**: Web application framework for Node.js
- **Body-Parser**: Middleware for parsing JSON request bodies
- **CORS**: Cross-Origin Resource Sharing middleware
- **Note**: Currently uses mock data (in-memory storage). Can be extended with MongoDB/Mongoose for persistence.

### Development Tools
- **Nodemon**: Automatic server restart during development
- **Create React App**: Build setup for React applications
- **ESLint**: Code linting tool

## Prerequisites

Before running this application, ensure you have the following installed:

- **Node.js** (version 16 or higher)
- **npm** (comes with Node.js)
- **Git** (for cloning the repository)

Note: MongoDB is not required as the application uses mock data for demonstration purposes.

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/zbr-khn/Zerodha_IU_WebApp.git
   cd Zerodha_IU_WebApp
   ```

2. **Install backend dependencies:**
   ```bash
   cd backend
   npm install
   cd ..
   ```

3. **Install frontend dependencies:**
   ```bash
   cd dashboard
   npm install
   cd ..
   ```

## Configuration

### Backend Configuration

The backend is pre-configured to run with mock data (in-memory storage). No configuration is required to start the application.

**Optional: To use MongoDB instead of mock data:**

1. Create a `.env` file in the `backend` directory
2. Add MongoDB connection string:
   ```
   MONGO_URL=mongodb://localhost:27017/zerodha
   # OR for MongoDB Atlas:
   # MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/zerodha
   PORT=3002
   ```
3. Uncomment MongoDB-related code in `backend/index.js`

### Frontend Configuration

The frontend is configured to connect to the backend at `http://localhost:3002`. If you change the backend port, update the API calls in the frontend components accordingly.

## Running the Application

### Start the Backend Server

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Start the server:
   ```bash
   npm start
   ```

   The backend server will start on `http://localhost:3002`.

### Start the Frontend Dashboard

1. Open a new terminal and navigate to the dashboard directory:
   ```bash
   cd dashboard
   ```

2. Start the React development server:
   ```bash
   npm start
   ```

   The frontend will be available at `http://localhost:3000` (or `http://localhost:3001` if port 3000 is occupied).

### Access the Application

Open your web browser and navigate to `http://localhost:3000` (or the port where the frontend is running). You should see the Zerodha IU WebApp dashboard.

## Authentication System

The application now includes a complete authentication system with signup and login functionality.

### Default Flows

1. **First Time Users**:
   - Visit `http://localhost:3000` → Redirects to login page
   - Click "Sign Up" to create a new account
   - Fill in Name, Email, Password
   - Redirected to dashboard after successful signup

2. **Returning Users**:
   - Visit login page
   - Enter email and password
   - Access the trading dashboard

### Features

- **Signup Form**: Full form validation with error messages
- **Login Form**: Secure login with credential verification
- **User Profile**: Display user information in the navigation menu
- **Logout**: One-click logout that clears session
- **Persistent Storage**: User data stored in browser localStorage
- **Route Protection**: Dashboard pages require authentication

### Files

- `/dashboard/src/components/AuthContext.js` - Authentication state management
- `/dashboard/src/components/Signup.js` - Signup form component
- `/dashboard/src/components/Login.js` - Login form component
- `/frontend/src/landing_page/signup/Signup.js` - Frontend signup page

## API Documentation

The backend provides the following REST API endpoints:

### Holdings
- **GET** `/allHoldings`: Retrieve all user holdings

### Positions
- **GET** `/allPositions`: Retrieve all user positions

### Orders
- **POST** `/newOrder`: Create a new trading order
  - Body parameters:
    - `name`: Stock symbol (string)
    - `qty`: Quantity (number)
    - `price`: Price per share (number)
    - `mode`: Order mode (string, e.g., "BUY" or "SELL")

## Project Structure

```
Zerodha_IU_WebApp/
├── backend/
│   ├── index.js              # Main server file
│   ├── package.json          # Backend dependencies
│   ├── .env                  # Environment variables
│   ├── model/                # Mongoose models
│   │   ├── HoldingsModel.js
│   │   ├── OrdersModel.js
│   │   └── PositionsModel.js
│   └── schemas/              # Mongoose schemas
│       ├── HoldingsSchema.js
│       ├── OrdersSchema.js
│       └── PositionsSchema.js
├── dashboard/
│   ├── public/
│   │   ├── index.html
│   │   └── robots.txt
│   ├── src/
│   │   ├── index.js          # React app entry point
│   │   ├── index.css         # Global styles
│   │   ├── components/       # React components
│   │   │   ├── Apps.js
│   │   │   ├── BuyActionWindow.js
│   │   │   ├── Dashboard.js
│   │   │   ├── DoughnoutChart.js
│   │   │   ├── Funds.js
│   │   │   ├── GeneralContext.js
│   │   │   ├── Holdings.js
│   │   │   ├── Home.js
│   │   │   ├── Menu.js
│   │   │   ├── Orders.js
│   │   │   ├── Positions.js
│   │   │   ├── Summary.js
│   │   │   ├── TopBar.js
│   │   │   ├── VerticalGraph.js
│   │   │   └── WatchList.js
│   │   └── data/
│   │       └── data.js       # Static data
│   └── package.json          # Frontend dependencies
├── frontend/                 # Additional frontend files (if any)
└── README.md                 # This file
```

## Contributing

This project was developed as part of a university coursework. For academic purposes:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## Author

- **Zubair Khan** - *IU STUDENT* - [GitHub Profile](https://github.com/zbr-khn)

---

**Note:** This is a simulation application for educational purposes. It does not connect to real trading APIs or execute actual trades. Always consult with financial professionals before making real investment decisions.

**Data Storage:** The application currently uses mock data stored in memory. All data (orders, holdings, positions) will be reset when the server restarts. For production use, integrate with a persistent database like MongoDB.