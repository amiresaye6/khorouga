### Khorouga Project Documentation

---

## **Frontend Documentation**

### **Project Overview**
Khorouga is a platform designed for users to share and explore trip programs. The application allows users to interact with the platform by creating, updating, deleting, and reacting to trips, while providing a smooth and engaging user experience. The frontend is built using modern technologies to ensure a responsive and dynamic interface.

### **Technology Stack**
- **Framework:** React.js
- **Routing:** React Router DOM
- **Styling:** Tailwind CSS
- **HTTP Requests:** Fetch API
- **Notifications:** React Hot Toast
- **Animations:** Framer Motion

### **Setup Instructions**

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/amiresaye6/khorouga.git
   ```
2. **Navigate to the Project Directory:**
   ```bash
   cd khorouga/front_end
   ```
3. **Install Dependencies:**
   ```bash
   npm install
   ```
4. **Run the Application:**
   ```bash
   npm start
   ```
   The application will run on `http://localhost:3000`.

### **Core Components**
- **App.js:** The main entry point that includes routing logic and renders the application.
- **Routes.js:** Handles the various routes within the app using React Router DOM.
- **Components:**
  - **Header.js:** Contains the navigation bar.
  - **Footer.js:** Includes links to external resources (e.g., GitHub, LinkedIn).
  - **TripCard.js:** Displays trip details with options to edit, delete, or react.
  - **CreateTripForm.js:** Form for users to create new trips.
  - **UpdateTripForm.js:** Form for updating existing trips.

### **Styling and Design**
The design is inspired by a modern and clean aesthetic, achieved through the use of Tailwind CSS. The utility-first approach allows for rapid and consistent styling.

### **Key Functionalities**
- **Creating a Trip:** Users can fill out a form to create a trip, with form validation and error handling in place.
- **Updating a Trip:** Allows users to edit the details of their existing trips.
- **Deleting a Trip:** Users can delete their trips with confirmation prompts.
- **Interacting with Trips:** Users can like and comment on trips using the Reactions component.
- **Notifications:** Real-time feedback is provided using React Hot Toast.

### **Frontend Code Snippets**
- **Component Structure:** Example of a simple React component structure:
  ```javascript
  const TripCard = ({ trip }) => {
    return (
      <div className="trip-card">
        <h3>{trip.name}</h3>
        <p>{trip.description}</p>
        <Reactions tripId={trip._id} />
      </div>
    );
  };
  export default TripCard;
  ```
- **Fetching Data with Fetch API:**
  ```javascript
  useEffect(() => {
    fetch('/api/trips')
      .then(response => response.json())
      .then(data => setTrips(data));
  }, []);
  ```
# to do
1- add image upload functionality
2- add data validation in the api
3- fix trips page

### **Deployment**
The frontend is deployed using Nginx as a reverse proxy. To deploy:
1. Build the project:
   ```bash
   npm run build
   ```
2. Configure Nginx to serve the built files:
   - Update the Nginx config file with the location of the built files.
   - Restart Nginx to apply the changes.

---

## **Backend Documentation**

### **Project Overview**
The backend serves as the API for the Khorouga platform, managing data flow and user authentication. Built using Node.js and Express.js, it interacts with a MongoDB database and uses various tools to ensure security, scalability, and performance.

### **Technology Stack**
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT (jsonwebtoken)
- **Environment Variables:** dotenv
- **Password Hashing:** bcryptjs
- **Caching:** Redis

### **Setup Instructions**

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/amiresaye6/khorouga.git
   ```
2. **Navigate to the Project Directory:**
   ```bash
   cd khorouga/back_end
   ```
3. **Install Dependencies:**
   ```bash
   npm install
   ```
4. **Set Up Environment Variables:**
   Create a `.env` file in the root directory and add the following:
   ```bash
   PORT=1234
   MONGO_URI=your_mongo_uri
   JWT_SECRET=your_jwt_secret
   REDIS_URL=your_redis_url
   ```
5. **Run the Application:**
   ```bash
   npm start
   ```
   The backend will run on `http://localhost:1234`.

### **API Documentation**

#### **Users API**
- **POST** `/api/users/register`: Register a new user.
- **POST** `/api/users/login`: Log in an existing user.
- **GET** `/api/users/current`: Get current logged-in user's details.

#### **Trips API**
- **GET** `/api/trips`: Get all trips.
- **POST** `/api/trips`: Create a new trip.
- **PUT** `/api/trips/:id`: Update a trip by ID.
- **DELETE** `/api/trips/:id`: Delete a trip by ID.

### **Key Functionalities**
- **Authentication:** Secure JWT-based authentication for user sessions.
- **CRUD Operations:** Full CRUD (Create, Read, Update, Delete) operations for managing trips.
- **Caching:** Redis is used to cache frequently accessed data, reducing the load on the database.
- **Error Handling:** Centralized error handling for consistent API responses.

### **Backend Code Snippets**
- **User Registration with Password Hashing:**
  ```javascript
  const bcrypt = require('bcryptjs');

  const registerUser = async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ username, password: hashedPassword });
    res.json(newUser);
  };
  ```
- **JWT Authentication:**
  ```javascript
  const jwt = require('jsonwebtoken');

  const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.sendStatus(403);

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) return res.sendStatus(403);
      req.user = user;
      next();
    });
  };
  ```

### **Deployment**
The backend is deployed using Docker and managed with PM2 for process management. To deploy:
1. Build the Docker image:
   ```bash
   docker build -t khorouga-backend .
   ```
2. Run the Docker container:
   ```bash
   docker run -p 1234:1234 khorouga-backend
   ```
3. Monitor the application with PM2:
   ```bash
   pm2 start server.js
   ```

### **Additional Tools**
- **Version Control:** Managed with Git and GitHub for collaboration.
- **API Testing:** Thunderclient is used for testing APIs during development.

### **Project Structure**
- **Frontend Repository:** [GitHub Frontend](https://github.com/amiresaye6/khorouga/tree/main/front_end)
- **Backend Repository:** [GitHub Backend](https://github.com/amiresaye6/khorouga/tree/main/back_end)

---

### **Live Demo**
Visit the live demo of Khorouga to explore and interact with trips. You can browse trips, create an account, and share your own adventures with the community.
- [Khorouga](https://amiralsayed.tech)
