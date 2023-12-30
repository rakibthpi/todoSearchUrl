import { Schema, model } from 'mongoose'
import { IUser } from '../interfaces/user.interface'

// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  age: {
    type: Number,
    required: [true, 'Age is required'],
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: [true, 'Email is required'],
  },
  photo: {
    type: String,
    default: null,
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  userStatus: {
    type: String,
    enum: ['active', 'inactive'], // 'active' | 'inactive'
    default: 'active',
  },
})

userSchema.pre('find', function (next) {
  this.where({ role: 'user' })
  next()
})
// 3. Create a Model.
const User = model<IUser>('User', userSchema)

export { User }
