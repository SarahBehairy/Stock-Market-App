📈 Stock Market App

The Stock Market App is a web application built with React and TypeScript that provides a clean and responsive interface for exploring stocks listed on the NASDAQ exchange. Users can search for stocks and load more data using infinite scrolling.

🚀 Features
View NASDAQ Stocks: Display a list of stocks with their ticker symbols and full names.
Infinite Scrolling: Load more stocks dynamically as you scroll.
Search Functionality: Search for stocks in real-time while typing.
Splash Screen: Displays a custom splash screen with a logo and app name.
Responsive Design: Optimized for both desktop and mobile devices.
Caching: Reduces redundant API requests using local caching.
Error Handling: Gracefully handles server errors and rate-limiting issues.
Light and Dark modes


🛠️ Tech Stack
Frontend: React, TypeScript
HTTP Client: Axios
Styling: Material-UI, CSS
State Management: Zustand
Build Tool: Vite


📦 Installation
Clone the Repository:
git clone https://github.com/your-username/stock-market-app.git
cd stock-market-app

Install Dependencies:
npm install

Start the Development Server:
npm run dev


Access the App: Open  http://localhost:5173/ in your browser.

🖼️ Screenshots
Splash Screen

Stock List

Search Stocks

📚 Usage
Splash Screen:

The app displays a splash screen with a logo and name for 3 seconds before navigating to the homepage.
Browse Stocks:

Scroll down the page to load more stocks dynamically.
Search Stocks:

Type in the search bar to find specific stocks by ticker or name. Results update as you type.
Error Handling:

If the API request exceeds the rate limit, the app retries with exponential backoff.
📋 File Structure

src/
├── assets/               # Static assets (images, icons, etc.)
├── components/           # Reusable UI components
│   ├── SplashScreen      # Splash screen component
│   ├── SearchBar         # Search bar
│   └── StockItem         # Individual stock item
├── features/             # Feature-specific logic and components
│   └── stocks/           # Stocks feature
│       ├── components/   # UI components for stocks
│       ├── services/     # API calls
│       ├── hooks/        # Custom hooks for stocks
│       └── stocksStore.ts # State management
├── pages/                # Top-level pages (routes)
├── services/             # Global API services
├── styles/               # Global or shared styles
├── hooks/                # Custom Hppls
└── App.tsx               # Main application component

💬 Contact
Author: Sarah Hanafy Behairy
Email: sarahhanafy20@gmail.com
Feel free to reach out for any questions or feedback! 😊
