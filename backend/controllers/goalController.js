import asyncHandler from 'express-async-handler'

export const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "get goals" })
})

export const setGoal = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    res.status(200).json({ message: "set goals" })
})

export const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `update goal ${req.params.id}` })
})

export const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `delete goal ${req.params.id}` })
})