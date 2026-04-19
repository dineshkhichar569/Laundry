# LaundryWallah

LaundryWallah is a full-stack laundry service web application built to make laundry booking simple, fast, and convenient. Users can browse services, book laundry pickups, track orders, read blogs, leave reviews, and manage their account through a clean responsive interface. An admin panel is also included for managing services, bookings, users, and blog content.

## Features

### User Features
- User signup and login with JWT authentication
- Browse laundry services and pricing
- Book laundry services online
- Track orders using a tracking ID
- View personal dashboard and booking history
- Read blog posts
- Submit and view customer reviews
- Responsive UI for desktop, tablet, and mobile

### Admin Features
- Admin-only protected routes
- Manage services
- Manage bookings
- Manage users
- Manage blog posts

## Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- Lucide React

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- CORS
- dotenv

### Deployment
- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas

## Project Structure

```bash
LaundryWallah/
│
├── client/                 # Frontend (React + Vite)
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vercel.json
│
├── server/                 # Backend (Node + Express)
│   ├── src/
│   │   ├── config/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── ...
│   ├── server.js
│   └── package.json
│
└── README.md
```

## Main Modules

- **Authentication**: Register, login, protected routes, admin-only access
- **Services**: Show available laundry services
- **Bookings**: Create bookings, view bookings, track orders
- **Reviews**: Add and display customer reviews
- **Blogs**: Display blog content for users and admin
- **Admin Panel**: Manage platform data from one place

## Environment Variables

### Frontend (`client/.env`)
```env
VITE_API_URL=http://localhost:8080/api
```

For production:
```env
VITE_API_URL=https://your-render-backend-url.onrender.com/api
```

### Backend (`server/.env`)
```env
PORT=8080
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:5173
NODE_ENV=development
```

For production:
```env
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_new_secure_secret
CLIENT_URL=https://your-vercel-frontend-url.vercel.app
NODE_ENV=production
```

## Installation and Setup

### 1. Clone the repository
```bash
git clone https://github.com/dineshkhichar569/Laundry.git
cd Laundry
```

### 2. Install frontend dependencies
```bash
cd client
npm install
```

### 3. Install backend dependencies
```bash
cd ../server
npm install
```

## Run the Project Locally

### Start backend
```bash
cd server
npm run start
```

or if you have nodemon:
```bash
npm run dev
```

### Start frontend
```bash
cd client
npm run dev
```

Frontend usually runs on:
```bash
http://localhost:5173
```

Backend usually runs on:
```bash
http://localhost:8080
```

## API Base URL

Your frontend Axios setup should use:

```js
import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:8080/api",
});

export default API;
```

## Important Backend Routes

```bash
/api/auth
/api/services
/api/bookings
/api/reviews
/api/blogs
/api/admin
/api/health
```

## Deployment Notes

### Frontend on Vercel
If you are using React Router with Vite, add a `vercel.json` file inside the frontend root:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/"
    }
  ]
}
```

This prevents `404 NOT_FOUND` on page refresh for routes like `/about`, `/reviews`, or `/blog`.

### Backend on Render
Make sure:
- `MONGO_URI` uses MongoDB Atlas, not local MongoDB
- `CLIENT_URL` is set to your Vercel frontend URL
- CORS allows your frontend origin
- `PORT` uses `process.env.PORT || 5000`

## Available Pages

### Public Pages
- Home
- Services
- About
- Contact
- FAQ
- Pricing
- Reviews
- Blog
- Blog Details
- Track Order
- Login
- Signup

### Protected Pages
- Book
- Dashboard
- My Bookings

### Admin Pages
- Admin Dashboard
- Manage Services
- Manage Bookings
- Manage Users
- Manage Blog

## Future Improvements
- Online payment integration
- Email notifications
- SMS order updates
- Coupon and discount system
- Order status timeline
- Profile image upload
- Analytics dashboard for admin

## Author

**Dinesh Khichar**  
Full Stack Developer | MERN | Shopify Developer

- GitHub: https://github.com/dineshkhichar569
- Project Repo: https://github.com/dineshkhichar569/Laundry

## License

This project is for learning, portfolio, and demonstration purposes.
