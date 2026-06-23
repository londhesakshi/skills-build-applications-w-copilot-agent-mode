import { Schema, model } from 'mongoose'

interface IWorkout {
  userId: string
  name: string
  duration: number // in minutes
  caloriesBurned: number
  intensity: 'low' | 'medium' | 'high'
  date: Date
  notes?: string
}

const workoutSchema = new Schema<IWorkout>(
  {
    userId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
      min: 1,
    },
    caloriesBurned: {
      type: Number,
      required: true,
      min: 0,
    },
    intensity: {
      type: String,
      enum: ['low', 'medium', 'high'],
      required: true,
    },
    date: {
      type: Date,
      default: () => new Date(),
      required: true,
    },
    notes: String,
  },
  {
    timestamps: true,
  }
)

export const Workout = model<IWorkout>('Workout', workoutSchema)
