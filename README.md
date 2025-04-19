# Movie House

Movie House is a Next.js-based web application that allows users to browse movies, explore genres, view movie details, and learn about directors. The app provides various features such as filtering movies by genre, viewing detailed information about each movie, and navigating to related help sections like FAQs, contact information, and privacy policies.

## Features

- **Browse Movies**: View a list of movies, each with details like title, description, release year, and rating.
- **Filter Movies by Genre**: Users can filter movies by genre, such as Drama, Sci-Fi, Action, and more.
- **Movie Details**: Click on a movie to view detailed information about it, including director and description.
- **Genres and Directors**: Explore movies based on genres and directors.
- **Help Section**: Access frequently asked questions (FAQs), contact information, and privacy policy.

## Pages

- **Home**: Displays trending movies.
- **Movies**: Displays a list of all movies with filtering options by genre.
- **Genres**: List all genres, and links to filtered movie lists for each genre.
- **Directors**: List of all directors and their respective movies.
- **Help**: A dynamic route to access various help pages like FAQs, Contact, and Privacy.

## Technologies Used

- **Next.js**: React framework for server-side rendering (SSR), static site generation (SSG), and dynamic routing.
- **React**: JavaScript library for building user interfaces.
- **CSS Modules**: Scoped CSS for styling components.
- **SWR**: React hook for data fetching and caching (for the Directors page).
- **File System (fs)**: Used for reading JSON data from a local file.

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS version)
- [npm](https://www.npmjs.com/) (or [Yarn](https://yarnpkg.com/))

### Steps to Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/movie-house.git
   cd movie-house
