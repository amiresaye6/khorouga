# Trips API Documentation

## Base URL

`https://amiralsayed.tech/api/trips`

## Endpoints

### 1. Get All Trips

- **Endpoint:** `GET /`
- **Description:** Retrieve a list of all trips.
- **Response:**
  - **Status Code:** 200 OK
  - **Content-Type:** application/json
  - **Response Body:**
    ```json
    [
      {
        "user_id": "string",
        "trip_name": "string",
        "author": "string",
        "duration": 0,
        "description": "string",
        "number_of_places": 0,
        "places": {
          "place_name": "string",
          "description": "string",
          "meta": {
            "votes": 0,
            "favs": 0
          },
          "location": "string"
        },
        "rating": 0,
        "meta": {
          "votes": 0,
          "favs": 0
        },
        "cover_image": "string",
        "createdAt": "ISODate",
        "updatedAt": "ISODate"
      }
    ]
    ```

### 2. Get a Single Trip

- **Endpoint:** `GET /:id`
- **Description:** Retrieve details of a specific trip by ID.
- **Parameters:**
  - **Path Parameter:**
    - `id` (string) - The ID of the trip.
- **Response:**
  - **Status Code:** 200 OK
  - **Content-Type:** application/json
  - **Response Body:**
    ```json
    {
      "user_id": "string",
      "trip_name": "string",
      "author": "string",
      "duration": 0,
      "description": "string",
      "number_of_places": 0,
      "places": {
        "place_name": "string",
        "description": "string",
        "meta": {
          "votes": 0,
          "favs": 0
        },
        "location": "string"
      },
      "rating": 0,
      "meta": {
        "votes": 0,
        "favs": 0
      },
      "cover_image": "string",
      "createdAt": "ISODate",
      "updatedAt": "ISODate"
    }
    ```

### 3. Get Trips by Author

- **Endpoint:** `GET /authors/:author`
- **Description:** Retrieve a list of trips by a specific author.
- **Parameters:**
  - **Path Parameter:**
    - `author` (string) - The name of the author.
- **Response:**
  - **Status Code:** 200 OK
  - **Content-Type:** application/json
  - **Response Body:**
    ```json
    [
      {
        "user_id": "string",
        "trip_name": "string",
        "author": "string",
        "duration": 0,
        "description": "string",
        "number_of_places": 0,
        "places": {
          "place_name": "string",
          "description": "string",
          "meta": {
            "votes": 0,
            "favs": 0
          },
          "location": "string"
        },
        "rating": 0,
        "meta": {
          "votes": 0,
          "favs": 0
        },
        "cover_image": "string",
        "createdAt": "ISODate",
        "updatedAt": "ISODate"
      }
    ]
    ```

### 4. Search Trips by Name

- **Endpoint:** `GET /s/search`
- **Description:** Search for trips by their name.
- **Parameters:**
  - **Query Parameter:**
    - `name` (string) - The name of the trip to search for.
- **Response:**
  - **Status Code:** 200 OK
  - **Content-Type:** application/json
  - **Response Body:**
    ```json
    [
      {
        "user_id": "string",
        "trip_name": "string",
        "author": "string",
        "duration": 0,
        "description": "string",
        "number_of_places": 0,
        "places": {
          "place_name": "string",
          "description": "string",
          "meta": {
            "votes": 0,
            "favs": 0
          },
          "location": "string"
        },
        "rating": 0,
        "meta": {
          "votes": 0,
          "favs": 0
        },
        "cover_image": "string",
        "createdAt": "ISODate",
        "updatedAt": "ISODate"
      }
    ]
    ```

### 5. Get My Trips (Private)

- **Endpoint:** `GET /me/trips`
- **Description:** Retrieve a list of trips created by the currently authenticated user.
- **Authorization:** Requires a valid JWT token.
- **Response:**
  - **Status Code:** 200 OK
  - **Content-Type:** application/json
  - **Response Body:**
    ```json
    [
      {
        "user_id": "string",
        "trip_name": "string",
        "author": "string",
        "duration": 0,
        "description": "string",
        "number_of_places": 0,
        "places": {
          "place_name": "string",
          "description": "string",
          "meta": {
            "votes": 0,
            "favs": 0
          },
          "location": "string"
        },
        "rating": 0,
        "meta": {
          "votes": 0,
          "favs": 0
        },
        "cover_image": "string",
        "createdAt": "ISODate",
        "updatedAt": "ISODate"
      }
    ]
    ```
  - **Response (Empty):**
    ```json
    { "message": "empty result" }
    ```

### 6. Create a Trip (Private)

- **Endpoint:** `POST /`
- **Description:** Create a new trip.
- **Authorization:** Requires a valid JWT token.
- **Request Body:**
  - **Content-Type:** application/json
  - **Body:**
    ```json
    {
      "trip_name": "string",
      "author": "string",
      "duration": 0,
      "description": "string",
      "number_of_places": 0,
      "places": {
        "place_name": "string",
        "description": "string",
        "meta": {
          "votes": 0,
          "favs": 0
        },
        "location": "string"
      },
      "rating": 0,
      "meta": {
        "votes": 0,
        "favs": 0
      },
      "cover_image": "string"
    }
    ```
- **Response:**
  - **Status Code:** 200 OK
  - **Content-Type:** application/json
  - **Response Body:**
    ```json
    {
      "user_id": "string",
      "trip_name": "string",
      "author": "string",
      "duration": 0,
      "description": "string",
      "number_of_places": 0,
      "places": {
        "place_name": "string",
        "description": "string",
        "meta": {
          "votes": 0,
          "favs": 0
        },
        "location": "string"
      },
      "rating": 0,
      "meta": {
        "votes": 0,
        "favs": 0
      },
      "cover_image": "string",
      "createdAt": "ISODate",
      "updatedAt": "ISODate"
    }
    ```

### 7. Update a Trip (Private)

- **Endpoint:** `PUT /:id`
- **Description:** Update an existing trip.
- **Authorization:** Requires a valid JWT token.
- **Parameters:**
  - **Path Parameter:**
    - `id` (string) - The ID of the trip to be updated.
- **Request Body:**
  - **Content-Type:** application/json
  - **Body:**
    ```json
    {
      "trip_name": "string",
      "author": "string",
      "duration": 0,
      "description": "string",
      "number_of_places": 0,
      "places": {
        "place_name": "string",
        "description": "string",
        "meta": {
          "votes": 0,
          "favs": 0
        },
        "location": "string"
      },
      "rating": 0,
      "meta": {
        "votes": 0,
        "favs": 0
      },
      "cover_image": "string"
    }
    ```
- **Response:**
  - **Status Code:** 200 OK
  - **Content-Type:** application/json
  - **Response Body:**
    ```json
    {
      "user_id": "string",
      "trip_name": "string",
      "author": "string",
      "duration": 0,
      "description": "string",
      "number_of_places": 0,
      "places": {
        "place_name": "string",
        "description": "string",
        "meta": {
          "votes": 0,
          "favs": 0
        },
        "location": "string"
      },
      "rating": 0,
      "meta": {




        "votes": 0,
        "favs": 0
      },
      "cover_image": "string",
      "createdAt": "ISODate",
      "updatedAt": "ISODate"
    }
    ```

### 8. Delete a Trip (Private)

- **Endpoint:** `DELETE /:id`
- **Description:** Delete a trip by ID.
- **Authorization:** Requires a valid JWT token.
- **Parameters:**
  - **Path Parameter:**
    - `id` (string) - The ID of the trip to be deleted.
- **Response:**
  - **Status Code:** 200 OK
  - **Content-Type:** application/json
  - **Response Body:**
    ```json
    {
      "message": "Trip deleted successfully"
    }
    ```

---

# Users API Documentation

## Base URL

`https://amiralsayed.tech/api/users`

## Endpoints

### 1. Get Current User

- **Endpoint:** `GET /current`
- **Description:** Retrieve information about the currently authenticated user.
- **Authorization:** Requires a valid JWT token.
- **Response:**
  - **Status Code:** 200 OK
  - **Content-Type:** application/json
  - **Response Body:**
    ```json
    {
      "id": "string",
      "username": "string",
      "email": "string",
      "createdAt": "ISODate",
      "updatedAt": "ISODate"
    }
    ```

### 2. Register a User

- **Endpoint:** `POST /register`
- **Description:** Register a new user.
- **Request Body:**
  - **Content-Type:** application/json
  - **Body:**
    ```json
    {
      "username": "string",
      "email": "string",
      "password": "string"
    }
    ```
- **Response:**
  - **Status Code:** 201 Created
  - **Content-Type:** application/json
  - **Response Body:**
    ```json
    {
      "id": "string",
      "username": "string",
      "email": "string",
      "createdAt": "ISODate",
      "updatedAt": "ISODate"
    }
    ```

### 3. Login a User

- **Endpoint:** `POST /login`
- **Description:** Authenticate a user and retrieve a JWT token.
- **Request Body:**
  - **Content-Type:** application/json
  - **Body:**
    ```json
    {
      "email": "string",
      "password": "string"
    }
    ```
- **Response:**
  - **Status Code:** 200 OK
  - **Content-Type:** application/json
  - **Response Body:**
    ```json
    {
      "token": "string",
      "user": {
        "id": "string",
        "username": "string",
        "email": "string"
      }
    }
    ```

### 4. Update User Profile (Private)

- **Endpoint:** `PUT /:id`
- **Description:** Update the profile information of the currently authenticated user.
- **Authorization:** Requires a valid JWT token.
- **Parameters:**
  - **Path Parameter:**
    - `id` (string) - The ID of the user to be updated.
- **Request Body:**
  - **Content-Type:** application/json
  - **Body:**
    ```json
    {
      "username": "string",
      "email": "string",
      "password": "string"
    }
    ```
- **Response:**
  - **Status Code:** 200 OK
  - **Content-Type:** application/json
  - **Response Body:**
    ```json
    {
      "id": "string",
      "username": "string",
      "email": "string",
      "createdAt": "ISODate",
      "updatedAt": "ISODate"
    }
    ```

### 5. Delete User (Private)

- **Endpoint:** `DELETE /:id`
- **Description:** Delete the currently authenticated user's account.
- **Authorization:** Requires a valid JWT token.
- **Parameters:**
  - **Path Parameter:**
    - `id` (string) - The ID of the user to be deleted.
- **Response:**
  - **Status Code:** 200 OK
  - **Content-Type:** application/json
  - **Response Body:**
    ```json
    {
      "message": "User deleted successfully"
    }
    ```
