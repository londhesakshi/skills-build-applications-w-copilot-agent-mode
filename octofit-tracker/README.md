# OctoFit Tracker

A modern multi-tier fitness tracking application built with React 19, Express, TypeScript, and MongoDB.

## Architecture

- **Frontend**: React 19 + Vite (Port 5173)
- **Backend**: Node.js + Express + TypeScript (Port 8000)
- **Database**: MongoDB (Port 27017)

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB running locally or connection string configured

### Frontend Setup

```bash
cd octofit-tracker/frontend
npm install
npm run dev
```

Frontend will be available at `http://localhost:5173`

### Backend Setup

```bash
cd octofit-tracker/backend
npm install
npm run dev
```

Backend API will be available at `http://localhost:8000`

## API Endpoints

- `GET /api/health` - Health check endpoint

## Development

- Frontend: Hot Module Replacement (HMR) enabled with Vite
- Backend: Auto-reload with tsx watch

## Project Structure

```
octofit-tracker/
├── frontend/          # React 19 + Vite application
│   ├── src/
│   ├── package.json
│   └── vite.config.ts
└── backend/           # Express + TypeScript API
    ├── src/
    ├── package.json
    └── tsconfig.json
```
