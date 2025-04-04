﻿# AQW Messenger

**AQW Messenger** is a full-stack web application designed to help players of *AdventureQuest Worlds (AQW)* find other players for boss fights. 
## Features

- Find and join lobbies for AQW boss fights.
- Create new lobbies to invite other players.
- Real-time updates on lobby status and participants.
- Simple and responsive interface for ease of use.

## Getting Started

After cloning the repository, set the environemnt variables in the root of the backend folder:

```
PORT=
MONGO_DB_URI=
JWT_SECRET=
```

After doing so, you can run the AQW Messenger application in two ways:

### Option 1: Running with Docker 

If you have Docker and Docker Compose installed, you can easily start the application by running the following command from the root directory of the repository:

```
docker-compose up --build
```

### Option 2: Running with npm commands

Navigate to the backend directory to start the server:

```
npm install
npm start
```

Navigate to the frontend directory to start the site:

```
npm install
npm run dev
```
