# Spring Boot + React Full Stack Demo

A full-stack application with Spring Boot backend and React frontend.

## Project Structure

```
├── backend/           # Spring Boot backend
│   ├── pom.xml
│   └── src/
│       ├── main/
│       │   ├── java/com/example/App.java
│       │   └── resources/application.properties
│       └── test/
└── frontend/          # React frontend (Vite)
    ├── src/
    ├── package.json
    └── vite.config.js
```

## Getting Started

### Backend (Spring Boot)

```bash
cd backend
mvn clean package
java -jar target/demo-1.0-SNAPSHOT.jar
```

The backend will start on http://localhost:8080

### Frontend (React + Vite)

```bash
cd frontend
npm install
npm run dev
```

The frontend will start on http://localhost:5173

## API Endpoints

- `GET /` - Returns "Hello, Spring Boot!"
