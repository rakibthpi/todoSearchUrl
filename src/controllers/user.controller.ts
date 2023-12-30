/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import { userService } from '../services/user.service'

const createUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body
    const result = await userService.createUser(userData)
    res.status(201).send({
      status: true,
      message: 'User created successfully',
      data: result,
    })
  } catch (error: any) {
    console.log(error)
    res.status(500).send({
      status: false,
      message: error.message || 'Internal server error',
    })
  }
}

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await userService.getAllUsers()
    res.status(200).send({
      status: true,
      message: 'Users fetched successfully',
      data: result,
    })
  } catch (error: any) {
    res.status(500).send({
      status: false,
      message: error.message || 'Internal server error',
    })
  }
}

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const result = await userService.getSingleUser(id)
    res.status(200).send({
      status: true,
      message: 'User fetched successfully',
      data: result,
    })
  } catch (error: any) {
    res.status(500).send({
      status: false,
      message: error.message || 'Internal server error',
    })
  }
}
const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const userData = req.body
    const result = await userService.updateUser(id, userData)
    res.status(200).send({
      status: true,
      message: 'User updated successfully',
      data: result,
    })
  } catch (error: any) {
    res.status(500).send({
      status: false,
      message: error.message || 'Internal server error',
    })
  }
}

const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const result = await userService.deleteUser(id)
    res.status(200).send({
      status: true,
      message: 'User deleted successfully',
      data: result,
    })
  } catch (error: any) {
    res.status(500).send({
      status: false,
      message: error.message || 'Internal server error',
    })
  }
}

export const userController = {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
}
