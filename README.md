# Simple GoogleMap mini-project

This project demos a small typeahead suggestion input for all American states and territories and a google map highlighting the states based on users selection. 

## Features

- Typeahead search for American states and territories.
- Dynamic map highlighting based on state selection.
- Backend data querying with GraphQL.
- Containerized MongoDB for data persistence.

## Tech Stack

**Client:** Vue.js

**Server:** Node.js, GraphQL

**Database:** MongoDB

**Containerization:** Docker

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Docker and Docker Compose
- Node.js and npm

## Setup and Installation

## Variables include:

VUE_APP_GOOGLE_MAPS_API_KEY - Your Google Maps API key.

## Running the Application
Clone the repository

git clone https://github.com/ziangit/miniproject.git
cd miniproject

Start the Docker containers
docker-compose up --build

Access the application

Frontend: http://localhost:8080
Backend (GraphQL Playground): http://localhost:3000/graphql

## Usage
After starting the application, navigate to the frontend URL. Start typing a U.S. state name in the search bar to see typeahead suggestions. Selecting a state will dynamically update the map and highlight the selected state.

## Demo

![Default Layout](img/default.png)
Default Layout

![a with multiple matches](img/a.png)
A with multiple matches

![California](img/CA.png)
Highlight California

![Highlight](img/highlight.png)
Highlight Alaska

![graphQL playground with mongoDB](img/graphQL.png)
graphQL playground with mongoDB





