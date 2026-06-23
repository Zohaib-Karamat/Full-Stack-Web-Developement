import * as userService from "../services/userService.js";
import asyncHandler from "../utils/asyncHandler.js";
import { successResponse } from "../utils/responseHandler.js";
import { STATUS_CODES, MESSAGES } from "../config/constants.js";

export const create = asyncHandler(async (req, res) => {
    const savedData = await userService.createUser(req.body);
    return successResponse(res, STATUS_CODES.CREATED, MESSAGES.USER_CREATED_SUCCESS, savedData);
});

export const getAllUser = asyncHandler(async (req, res) => {
    const userData = await userService.getAllUsers();
    return successResponse(res, STATUS_CODES.OK, MESSAGES.USERS_FETCHED_SUCCESS, userData);
});

export const getUserById = asyncHandler(async (req, res) => {
    const userData = await userService.getUserById(req.params.id);
    return successResponse(res, STATUS_CODES.OK, "User fetched successfully", userData);
});

export const updateById = asyncHandler(async (req, res) => {
    const updatedUser = await userService.updateUserById(req.params.id, req.body);
    return successResponse(res, STATUS_CODES.OK, MESSAGES.USER_UPDATED_SUCCESS, updatedUser);
});

export const deleteById = asyncHandler(async (req, res) => {
    const deletedUser = await userService.deleteUserById(req.params.id);
    return successResponse(res, STATUS_CODES.OK, MESSAGES.USER_DELETED_SUCCESS, deletedUser);
});
