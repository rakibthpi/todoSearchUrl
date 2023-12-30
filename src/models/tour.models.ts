import { Schema, model } from 'mongoose'
import { ITour } from '../interfaces/tour.interface'

const tourSchema = new Schema<ITour>({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
  },
})

// 3. Create a Model.
const User = model<ITour>('User', tourSchema)

export default User
