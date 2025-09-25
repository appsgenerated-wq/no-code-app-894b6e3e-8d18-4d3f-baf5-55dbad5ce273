# BidHub - Online Auction Platform

This is a complete, production-ready React application for an online auction platform, powered by a Manifest-defined backend.

## Features

- **User Authentication**: Secure user registration and login.
- **Auction Listings**: Users can create, browse, and view auction items.
- **Real-time Bidding**: Users can place bids on active auctions.
- **Image Uploads**: Sellers can upload images for their items.
- **User Dashboard**: A personalized space for users to manage their listings and bids.
- **Professional UI**: A modern, responsive interface built with React and Tailwind CSS.

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation & Setup

1.  **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Set up environment variables**:
    Create a `.env` file in the root of your project and add the following:

    ```env
    VITE_API_URL=https://no-code-platform-backend-for-generated.onrender.com/api
    VITE_APP_ID=BidHub
    ```

4.  **Run the development server**:
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

## Project Structure

The project follows a standard and scalable structure:

```
src/
├── components/       # Reusable UI components
├── screens/          # Page-level components
├── context/          # React Context providers (e.g., AuthContext)
├── services/         # API interaction and business logic
├── navigation/       # Routing configuration
├── constants/        # Application constants
├── App.jsx           # Main application component
└── main.jsx          # Application entry point
```
