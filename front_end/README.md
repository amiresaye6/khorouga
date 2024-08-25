### Khorouga Frontend Documentation

---

## Overview

This document provides an overview of the Khorouga frontend application, detailing its structure, components, pages, and key functionalities. Khorouga is a platform designed to allow users to explore, share, and interact with various trip programs.

---

## Table of Contents

1. [Project Structure](#project-structure)
2. [Pages](#pages)
   - [Home](#home)
   - [Login](#login)
   - [Register](#register)
   - [Trips](#trips)
   - [About](#about)
   - [CreateTrip](#createtrip)
   - [Profile](#profile)
   - [UpdateTrip](#updatetrip)
   - [Contact Us](#contact-us)
   - [Settings](#settings)
   - [NotAllowed](#notallowed)
3. [Components](#components)
   - [Navbar](#navbar)
   - [FooterComponent](#footercomponent)
   - [Toaster](#toaster)
4. [Routing](#routing)
5. [Styling](#styling)
6. [Images](#images)

---

## Project Structure

The frontend is organized into components, pages, and other essential files to manage the overall application.

```
/src
│
├── /components
│   ├── Navbar
│   └── Footer
│
├── /pages
│   ├── Home.js
│   ├── Login.js
│   ├── Register.js
│   ├── Trips.js
│   ├── About.js
│   ├── CreateTrip.js
│   ├── Profile.js
│   ├── UpdateTrip.js
│   ├── ContactUs.js
│   ├── Settings.js
│   └── NotAllowed.js
│
├── App.js
├── index.js
└── /assets
```

---

## Pages

### Home
**Path:** `/`

The landing page of the Khorouga platform. It introduces users to the platform's purpose and features, encouraging exploration of the available trips.

### Login
**Path:** `/login`

A page where users can enter their credentials to log into their accounts. This page is essential for accessing user-specific features like creating, updating, and deleting trips.


### Register
**Path:** `/register`

This page allows new users to sign up for an account. It includes a form for entering necessary details like username, email, and password.

### Trips
**Path:** `/explore`

Displays a list of all available trips on the platform. Users can browse and explore trips without needing to log in. Each trip card shows key details and options to interact with the trip.

### About
**Path:** `/about`

Provides information about the Khorouga platform, its mission, and the team behind it. This page helps users understand the purpose and vision of the platform.

### CreateTrip
**Path:** `/create`

A page that allows authenticated users to create a new trip. The form includes fields for trip details like name, description, places, and images. 

### Profile
**Path:** `/profile`

Displays the user's profile, including their personal information and a list of trips they have created. Users can manage their trips from this page.

### UpdateTrip
**Path:** `/profile/update/:tripId`

This page allows users to update the details of an existing trip. It loads the trip's current information and provides a form for editing.

### Contact Us
**Path:** `/contact`

A contact page where users can find various ways to reach out to the Khorouga team. It includes an input field with a copy button for the team's email address.

### Settings
**Path:** `/settings`

Allows users to manage their account settings, including updating their profile picture, username, and other personal details.

### NotAllowed
**Path:** `/not-allowed`

Displayed when users try to access a page or feature they do not have permission to view. It informs them that access is restricted.

---

## Components

### Navbar

A top navigation bar that includes links to various pages like Home, Trips, Login, Register, and Profile. It is visible on every page, providing easy navigation.

### FooterComponent

A footer that contains links to important pages and social media, and includes general information about the platform. It is displayed at the bottom of every page.

### Toaster

A notification system that provides real-time feedback to users, such as success or error messages, using `react-hot-toast`.

---

## Routing

Routing in Khorouga is handled by React Router DOM. The `Routes` component in `App.js` manages the different routes corresponding to the pages listed above.

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
  <Route path="/explore" element={<Trips />} />
  <Route path="/about" element={<About />} />
  <Route path="/create" element={<CreateTrip />} />
  <Route path="/profile" element={<Profile />} />
  <Route path="/profile/update/:tripId" element={<UpdateTrip />} />
  <Route path="/contact" element={<ContactUs />} />
  <Route path="/settings" element={<SettingsPage />} />
  <Route path="/not-allowed" element={<NotAllowed />} />
</Routes>
```

---

## Styling

Styling across the Khorouga frontend is managed with Tailwind CSS, which allows for rapid and consistent design application using utility classes. Each component and page is styled to maintain a cohesive and user-friendly interface.

---

## Images

Placeholder images are included in the documentation for visualization purposes. Actual images can be updated in the `/assets` directory.
