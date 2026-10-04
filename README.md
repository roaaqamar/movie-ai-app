# Movie Search App

A React + TypeScript movie search application built as part of the **FlyRank AI Front-end AI Engineering Internship – Week 3: React App Development with AI**.

The application allows users to search for movies using the OMDb API, view movie details, create an account, log in, and save favorite movies using Firebase Authentication and Cloud Firestore.

## Live Demo

> Add the deployed application URL here after deployment.

## GitHub Repository

> Add the GitHub repository URL here after creating the repository.

---

## Tech Stack

* React
* TypeScript
* Vite
* Tailwind CSS / CSS
* OMDb API
* Firebase Authentication
* Cloud Firestore
* ESLint
* Git & GitHub

---

## Main Features

* Search movies by title
* Search using the Enter key
* Display dynamic movie results
* Loading state
* Error state
* Empty search/results state
* Movie details modal
* Poster fallback when a movie has no poster
* User registration
* User login
* User logout
* Add/remove movies from favorites
* Store favorites per authenticated user in Firestore
* Responsive movie grid
* Accessible buttons and labels

---

# Development Process

## Step 1 — Project Setup and Cleanup

The project was created using React, TypeScript, and Vite.

The initial Vite structure was cleaned and organized into reusable components, services, hooks, contexts, and type definitions.

The project structure was kept simple so that each responsibility is separated clearly.

---

## Step 2 — Search Bar

A reusable `SearchBar` component was created.

It receives:

* The current search value
* An `onChange` handler
* An `onSearch` handler

The search can be submitted using the search button or by pressing Enter.

### AI Prompt

> Create a reusable React SearchBar component using TypeScript. It should receive the input value, an onChange handler, and an onSearch handler as props. Keep the component simple and reusable.

### Manual Improvements

The component was reviewed manually to ensure that the props matched the application's existing TypeScript types and that the search interaction worked correctly.

---

## Step 3 — Movie Card

A reusable `MovieCard` component was created to display:

* Movie poster
* Movie title
* Release year
* Movie type
* Favorite button

The card also supports opening the movie details modal.

A fallback poster was added for movies where OMDb does not provide a valid poster.

### AI Prompt

> Create a reusable MovieCard component in React and TypeScript that displays a movie poster, title, year, type, and a favorite button. Keep the component reusable through props.

### Manual Improvements

The generated implementation was reviewed and adjusted to fit the existing project structure and movie type definitions.

The poster fallback and accessible favorite button labels were also verified manually.

---

## Step 4 — OMDb Service Layer

The OMDb API logic was separated into a service file instead of placing API requests directly inside the UI components.

This keeps the application easier to maintain.

### AI Prompt

> Create a TypeScript service for the OMDb API. The service should expose a function for searching movies by title and use an environment variable for the API key.

### Manual Improvements

The API response handling was checked manually to ensure that failed searches and empty results were handled correctly.

The OMDb API key is stored in `.env` and `.env` is excluded from Git using `.gitignore`.

---

## Step 5 — Connect Search to OMDb

The search bar was connected to the OMDb service.

When the user searches for a movie, the application sends the search term to OMDb and updates the movie list dynamically.

### AI Prompt

> Connect the SearchBar component to the OMDb movie search service. When the user submits a search, fetch the movies and display the results in the application.

### Manual Improvements

The search flow was tested manually using different movie titles and empty search input.

---

## Step 6 — Loading, Error, and Empty States

The application was updated to provide feedback during API requests.

The UI now handles:

* Loading
* API errors
* No search results
* Empty initial state

### AI Prompt

> Add loading, error, and empty states to the React movie search application. Make sure the user receives clear feedback during API requests and when no movies are found.

### Manual Improvements

The messages were reviewed and simplified to keep them clear and user-friendly.

---

## Step 7 — Movie Details Modal

A reusable movie details modal was added.

When a movie card is selected, the application displays additional movie information including the full plot.

The movie's IMDb ID is used to request detailed information from OMDb.

### AI Prompt

> Create a reusable React movie details modal. When a movie card is clicked, display the selected movie information and fetch the full movie details using its IMDb ID.

### Manual Improvements

The modal behavior, close button, loading state, and displayed information were manually tested.

---

## Step 8 — Organize Movie Types

The movie-related TypeScript types were organized into a dedicated types folder.

This allows components and services to share consistent movie data structures.

### AI Prompt

> Create reusable TypeScript types for the OMDb movie search response and movie objects. Keep the types organized in a dedicated types folder.

### Manual Improvements

The types were checked against the actual OMDb responses used by the application.

---

## Step 9 — Favorites Feature

The application initially used local state/local storage concepts while developing the favorites functionality.

The feature was later migrated to Firebase so that favorites could belong to authenticated users.

Users can:

* Add movies to favorites
* Remove movies from favorites
* View their saved favorites

---

## Step 10 — Firebase Authentication

Firebase Authentication was added to support user accounts.

Users can:

* Register with email and password
* Log in
* Log out
* Access the application only after authentication

An authentication context was created to make the current user available throughout the application.

### AI Prompt

> Add Firebase Authentication to my React TypeScript movie application. Support email/password registration, login, logout, and authentication state. Use a React context so the current user can be accessed throughout the application.

### Manual Improvements

Firebase configuration was reviewed manually.

Authentication error messages were also customized to provide clearer feedback for invalid credentials, invalid email addresses, existing accounts, and weak passwords.

---

## Step 11 — Firestore Favorites

Cloud Firestore was integrated to persist favorites for each authenticated user.

Favorites are stored using a user-specific structure:

```text
users
  └── userId
      └── favorites
          └── movieId
```

This means each user's favorites are separated from other users' favorites.

### AI Prompt

> Connect the favorites feature to Cloud Firestore. Store each user's favorite movies under their authenticated Firebase user ID. Allow adding and removing favorites and keep the UI synchronized with Firestore.

### Manual Improvements

The Firestore logic was reviewed and tested manually.

The favorite state was also tested after refreshing the page to verify that favorites remain available.

---

## Step 12 — Error Handling and Code Corrections

AI-generated code was reviewed instead of being accepted without testing.

During development, several issues were identified and corrected manually.

Examples include:

* Adjusting Firebase authentication error handling
* Correcting React context structure
* Separating authentication context, provider, and hook
* Fixing an unnecessary state update in the favorites hook
* Keeping components compatible with the existing TypeScript types
* Fixing CSS syntax and duplicated styles
* Adding a poster fallback
* Verifying that `.env` is not committed to Git

These changes were made after reviewing and testing the generated implementation.

---

## Step 13 — UI Improvements

The styling was reviewed and improved manually.

Improvements included:

* Responsive movie grid
* Movie card layout
* Favorite button states
* Authentication form styling
* User bar
* Modal styling
* Empty/loading/error messages
* Poster fallback
* Responsive behavior on smaller screens

The goal was to keep the interface simple and usable rather than adding unnecessary features.

---

# How AI Assisted During Development

AI was used as a **development assistant**, not as a replacement for testing or decision-making.

It was mainly used for:

* Generating initial component structures
* Suggesting React and TypeScript implementations
* Explaining unfamiliar Firebase concepts
* Creating API service functions
* Debugging errors
* Suggesting improvements to error handling
* Reviewing component structure
* Improving CSS
* Explaining Git and project organization
* Helping identify possible edge cases

Generated code was reviewed, tested, and modified before being included in the final application.

---

# Examples of AI Prompts Used

### Component Development

> Create a reusable React component for displaying movie information using TypeScript and props.

### API Integration

> Create a clean TypeScript service function for searching movies using the OMDb API.

### Debugging

> Review this React/TypeScript code and identify the cause of the error without changing the existing architecture unnecessarily.

### Firebase Authentication

> Explain how to add Firebase email/password authentication to this React TypeScript application and organize it using an authentication context.

### Firestore

> Implement user-specific favorite movies using Cloud Firestore. Each authenticated user should have their own favorites collection.

### Code Review

> Review this implementation for unnecessary state updates, React hook issues, TypeScript problems, and maintainability issues. Suggest only changes that are necessary.

### CSS Review

> Review this CSS for invalid properties, duplicated rules, responsive issues, and unnecessary styles. Keep the current design and avoid unnecessary refactoring.

---

# Manual Improvements After AI-Generated Code

The following changes were made after reviewing and testing AI-generated code:

1. Customized Firebase authentication error messages.
2. Separated authentication context, provider, and hook to avoid React Fast Refresh issues.
3. Removed an unnecessary `setFavorites([])` state update from the favorites effect.
4. Added a poster fallback for movies without valid posters.
5. Improved accessibility labels for favorite buttons.
6. Cleaned duplicated CSS rules.
7. Corrected invalid CSS properties.
8. Verified TypeScript types against actual OMDb responses.
9. Verified Firestore favorite persistence after page refresh.
10. Verified that `.env` is excluded from Git.

These manual corrections demonstrate that the AI-generated code was reviewed and adapted rather than used blindly.

---

# Final Application Flow

```text
User
  ↓
Authentication
  ↓
Movie Search
  ↓
OMDb API
  ↓
Movie Results
  ↓
Movie Details Modal
  ↓
Favorite Movie
  ↓
Firebase Authentication
  ↓
Cloud Firestore
  ↓
User-specific Favorites
```

---

# Testing and Verification

The application was manually tested for:

* Registration
* Login
* Logout
* Movie search
* Empty search
* Invalid movie search
* Loading state
* Movie details modal
* Add favorite
* Remove favorite
* Favorite persistence after refresh
* Poster fallback
* Responsive layout

The project was also verified using ESLint and the production build.

### ESLint

```bash
npm run lint
```

Result:

```text
ESLint completed successfully with no errors or warnings.
```

### Production Build

```bash
npm run build
```

Result:

```text
✓ built successfully
```

The Vite build produced a non-blocking chunk-size warning because the generated JavaScript bundle is larger than the default 500 kB warning threshold. The production build itself completed successfully.

---

# Project Structure

```text
src/
├── components/
│   ├── auth/
│   │   └── Auth.tsx
│   ├── movieCard/
│   │   └── MovieCard.tsx
│   ├── movieModal/
│   │   └── MovieModal.tsx
│   ├── search/
│   │   └── SearchBar.tsx
│   └── Header.tsx
│
├── contexts/
│   ├── AuthContext.ts
│   ├── AuthProvider.tsx
│   └── useAuth.ts
│
├── hooks/
│   └── useFavorites.ts
│
├── services/
│   └── omdbMovieService.ts
│
├── types/
│   └── movie.ts
│
├── App.tsx
├── App.css
├── firebase.ts
└── main.tsx

public/
└── no-poster.svg
```

---

# Security Notes

The OMDb API key is stored in an environment variable and `.env` is excluded through `.gitignore`.

Firebase client configuration is used as required by Firebase's web SDK. Firestore access is controlled through authentication and security rules.

Sensitive environment files should never be committed to the repository.

---

# Development Philosophy

The project was developed incrementally.

Each feature was implemented, reviewed, tested, and corrected before moving to the next feature.

AI was used to accelerate development, explain concepts, generate implementation ideas, and assist with debugging, while final technical decisions, testing, and manual corrections were performed by the developer.

---

# Final Status

The application is complete and ready for submission for the FlyRank AI **Week 3 – React App Development with AI** assignment.

The final submission should include:

* GitHub repository
* Live deployed application
* Development prompts
* Explanation of AI assistance
* Examples of manual corrections and improvements
