# Trips API Documentation

## Base URL

`/trips`

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

### 4. Get My Trips (Private)

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

### 5. Create a Trip (Private)

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

### 6. Update a Trip (Private)

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

### 7. Delete a Trip (Private)

- **Endpoint:** `DELETE /:id`
- **Description:** Delete an existing trip.
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
      "deletedTrip": {
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
    }
    ```
