# CA1: Event Management REST API

A RESTful API built with **Node.js** and **Express.js** for managing events, using an **in-memory array** for data storage (no database).

## Features
- CRUD operations for events
- Input validation middleware
- Centralized error-handling middleware
- Proper HTTP status codes

## Event Object Structure
```json
{
  "id": 1,
  "name": "Tech Fest 2026",
  "category": "Technology",
  "date": "2026-08-15",
  "status": "upcoming"
}
```
Allowed `status` values: `upcoming`, `ongoing`, `completed`, `cancelled`

## Installation

```bash
git clone <this-repo-url>
cd CA1-event-api
npm install
npm start
```

Server runs on `http://localhost:3000`

## API Endpoints

| Method | Endpoint                  | Description                     |
|--------|----------------------------|----------------------------------|
| GET    | /api/events                | Retrieve all events             |
| GET    | /api/events/:id            | Retrieve an event by ID         |
| POST   | /api/events                | Add a new event (validated)     |
| PUT    | /api/events/:id            | Update complete event details   |
| PATCH  | /api/events/:id/status     | Update only the event status    |
| DELETE | /api/events/:id            | Delete an event by ID           |

## Example Requests

### Create an event
```bash
curl -X POST http://localhost:3000/api/events \
  -H "Content-Type: application/json" \
  -d '{"name":"Hackathon","category":"Technology","date":"2026-10-05","status":"upcoming"}'
```

### Update event status
```bash
curl -X PATCH http://localhost:3000/api/events/1/status \
  -H "Content-Type: application/json" \
  -d '{"status":"completed"}'
```

### Delete an event
```bash
curl -X DELETE http://localhost:3000/api/events/1
```

## Project Structure
```
CA1-event-api/
├── controllers/
│   └── eventController.js
├── data/
│   └── events.js
├── middleware/
│   ├── errorHandler.js
│   └── validateEvent.js
├── routes/
│   └── eventRoutes.js
├── server.js
├── package.json
└── README.md
```

## Tech Stack
- Node.js
- Express.js
- No database (in-memory array as required by CA1)
