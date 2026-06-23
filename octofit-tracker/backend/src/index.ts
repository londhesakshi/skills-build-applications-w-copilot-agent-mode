import express, { Express } from 'express'
import mongoose from 'mongoose'

const app: Express = express()
const PORT = 8000
const MONGODB_URI = 'mongodb://localhost:27017/octofit-tracker'

// Middleware
app.use(express.json())

// MongoDB Connection
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB')
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error)
  })

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'OctoFit Tracker API is running' })
})

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
  console.log(`Frontend: http://localhost:5173`)
  console.log(`Backend: http://localhost:${PORT}`)
  console.log(`MongoDB: mongodb://localhost:27017`)
})
