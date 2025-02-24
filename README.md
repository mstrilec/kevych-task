# Train Schedule Application

This is a full-stack application for managing train schedules. It includes a frontend built with **Next.js** and a backend built with **NestJS**. The application allows users to view, add, edit, and delete train schedules, as well as perform search and sorting operations.

## Features

- **User Authentication**: Register and login with JWT-based authentication.
- **Train Schedule Management**:
  - View a list of trains.
  - Add new trains.
  - Edit existing trains.
  - Delete trains.
- **Search and Sorting**: Search trains by name or destination, and sort by departure or arrival time.
- **Responsive Design**: Built with **Material-UI** and **Tailwind CSS**.

## Technologies Used

### Frontend

- **Next.js**: React framework for server-side rendering and static site generation.
- **Material-UI**: React component library for building responsive UI.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Axios**: HTTP client for making API requests.
- **React Hook Form**: Library for managing forms.

### Backend

- **NestJS**: A progressive Node.js framework for building efficient and scalable server-side applications.
- **Prisma**: Modern database toolkit for TypeScript and Node.js.
- **PostgreSQL**: Relational database for storing train and user data.
- **Passport.js**: Authentication middleware for Node.js.
- **JWT**: JSON Web Tokens for secure user authentication.

### Deployment

- **Vercel**: Frontend deployment platform.
- **Render**: Backend and database deployment platform.

---

## Getting Started

### Prerequisites

- **Node.js**: Make sure you have Node.js installed (version 16 or higher).
- **PostgreSQL**: Install PostgreSQL or use a cloud-based database like Render PostgreSQL or ElephantSQL.
- **Git**: Install Git to clone the repository.

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/mstrilec/kevych-task.git
   cd kevych-task
   ```

2. **Install dependencies for the frontend**:

   ```bash
   cd frontend
   npm install
   ```

3. **Install dependencies for the backend**:

   ```bash
   cd ../backend
   npm install
   ```

4. **Set up environment variables**:

   Create a `.env` file in the backend directory:

   ```env
   DATABASE_URL=postgresql://your_db_user:your_db_password@your_db_host:5432/your_db_name
   JWT_SECRET=your_jwt_secret_key
   ```

   Create a `.env.local` file in the frontend directory:

   ```env
   NEXT_PUBLIC_API_URL=http://localhost:5000
   ```

5. **Run database migrations**:

   ```bash
   npx prisma migrate dev --name init
   ```

### Running Locally

1. **Start the backend**:
   ```bash
   cd backend
   npm run start:dev
   ```
2. **Start the frontend**:
   ```bash
   cd ../frontend
   npm run dev
   ```
3. **Access the application**:

   Open your browser and go to [http://localhost:3000](http://localhost:3000).

## Deployment

### Frontend (Vercel)

1. Push your code to a GitHub repository.
2. Go to Vercel and create a new project.
3. Connect your GitHub repository and deploy the frontend.

### Backend (Render)

1. Push your code to a GitHub repository.
2. Go to Render and create a new Web Service.
3. Connect your GitHub repository and deploy the backend.

### Database (Render PostgreSQL)

1. Go to Render and create a new PostgreSQL database.
2. Update the `DATABASE_URL` environment variable in the backend settings.

## Project Structure

```bash
kevych-task/
├── frontend/               # Next.js frontend
│   ├── public/             # Static files
│   ├── src/                # Source code
│   ├── package.json        # Frontend dependencies
│   └── ...
├── backend/                # NestJS backend
│   ├── src/                # Source code
│   ├── prisma/             # Prisma schema and migrations
│   ├── package.json        # Backend dependencies
│   └── ...
└── README.md               # Project documentation
```

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/YourFeatureName
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add some feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/YourFeatureName
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contact

If you have any questions or need assistance, feel free to reach out:

- **GitHub**: [mstrilec](https://github.com/mstrilec)
- **Email**: [your.email@example.com](mailto\:your.email@example.com)

Happy coding! 🚀

---

## Example Configuration

Here’s an example of an Axios configuration:

```typescript
const api = axios.create({
  baseURL: 'https://kevych-task-backend.onrender.com',
});
```

## Example Environment Variables

Here’s an example of a `.env` file for the backend:

```env
DATABASE_URL=postgresql://your_db_user:your_db_password@your_db_host:5432/your_db_name
JWT_SECRET=your_jwt_secret_key
```

And for the frontend:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

