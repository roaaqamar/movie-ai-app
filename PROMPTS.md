# Movie Search App

## Step 1 – Project Cleanup
Date: 2026-08-03

### Goal
Clean the default Vite React project and prepare a reusable application shell before implementing features.
### Reason
Prepare a clean and maintainable React project before implementing the movie search functionality.


### AI Prompt
Implement Step 1 only.

Tasks:
- Remove all default Vite demo content.
- Delete unused assets.
- Keep a clean React application shell.
- Keep only Header and main placeholder.
- Do not add movie functionality yet.
- Ensure npm run build succeeds.

### Result
- Removed Vite demo assets.
- Removed demo CSS.
- Removed sample components.
- Created clean project structure.
- Verified successful production build.

### Files Modified
- App.tsx
- App.css
- Header.tsx
- index.css
- index.html

### Verification
- npm run build ✔
- No TypeScript errors ✔
- Clean project shell ✔

### Notes
The AI assistant was used to:
- Plan the cleanup process.
- Identify unused files.
- Suggest code structure.
- Verify the production build.

All file changes were reviewed and approved before being kept.

# Step 2 – SearchBar UI

## Goal
Create the SearchBar UI component without implementing any search functionality.

## AI Prompt
Implement Step 2 only.

Tasks:
- Create a reusable SearchBar component.
- Add a search input.
- Use a placeholder:
  "Search for a movie..."
- Keep the component presentational only.
- Do not connect to OMDb.
- Do not use state yet.
- Keep the existing layout.

## Result
- Created SearchBar component.
- Added search input to the main layout.
- Kept UI only without functionality.
- Maintained clean component structure.

## Files Modified
- src/components/Search/SearchBar.tsx
- src/App.tsx
- src/App.css

## Verification
- Application runs successfully ✔
- Search input appears correctly ✔
- No TypeScript errors ✔
- No API calls added ✔
### Notes
After testing the UI, the SearchBar styling was adjusted to:
- Fix the input width.
- Center the search bar correctly.
- Improve the placeholder appearance.
- Keep the component reusable and responsive.

Implement Step 3 only.

Goal:
Create a reusable MovieCard UI component.

Tasks:
- Create a MovieCard component.
- Display:
  - Movie poster placeholder
  - Movie title
  - Release year
  - Movie type
- Use static placeholder data only.
- Do not connect to OMDb API.
- Do not implement search functionality.
- Keep the component reusable.
- Maintain the existing layout.

# Step 3 – MovieCard UI

## Goal
Create a reusable MovieCard component to display movie information without connecting to the API.

## AI Prompt
Implement Step 3 only.

Tasks:
- Create a reusable MovieCard component.
- Display:
  - Poster
  - Title
  - Year
  - Type
- Keep the component presentational only.
- Do not connect to OMDb API.
- Use static sample movie data.
- Add responsive styling.

## Result
- Created reusable MovieCard component.
- Displayed sample movie information.
- Added responsive card styling.
- Added hover animation.
- Used external poster image for preview.

## Files Modified
- src/components/movieCard/MovieCard.tsx
- src/App.tsx
- src/App.css

## Verification
- Movie card renders successfully ✔
- Poster image displays correctly ✔
- Responsive styling works ✔
- Hover effect works ✔
- No API calls added ✔

## Notes
The AI assistant was used to:
- Design the reusable MovieCard component.
- Improve component styling.
- Refine responsive layout.
- Review the UI before moving to API integration.

# Step 4 – OMDb Service Layer

## Goal
Prepare the OMDb API service layer before connecting the UI.

## AI Prompt
Implement Step 4 only.

Tasks:
- Create the services folder.
- Create omdbMovieService.ts.
- Read the API key from .env.
- Create a reusable searchMovies() function.
- Do not connect the UI yet.

## Result
- Created reusable OMDb service.
- Added environment variable support.
- Created reusable search function.
- Separated API logic from UI.

## Files Modified
- src/services/omdbMovieService.ts
- .env

## Verification
- API service created ✔
- Environment variables configured ✔
- No TypeScript errors ✔

## Notes
The AI assistant was used to:
- Design the service layer.
- Organize API logic.
- Keep the project modular and scalable.