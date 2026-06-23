import * as userRepository from "../repositories/userRepository.js";
import AppError from "../utils/AppError.js";
import { STATUS_CODES, MESSAGES } from "../config/constants.js";

export const createUser = async (userData) => {
    const { email } = userData;
    const existingUser = await userRepository.findUserByEmail(email);
    if (existingUser) {
        throw new AppError(MESSAGES.USER_ALREADY_EXISTS, STATUS_CODES.BAD_REQUEST);
    }
    return await userRepository.createUser(userData);
};

export const getAllUsers = async () => {
    const users = await userRepository.findAllUsers();
    if (!users || users.length === 0) {
        throw new AppError(MESSAGES.NO_USERS_FOUND, STATUS_CODES.NOT_FOUND);
    }
    return users;
};

export const getUserById = async (id) => {
    const user = await userRepository.findUserById(id);
    if (!user) {
        throw new AppError(MESSAGES.USER_NOT_FOUND, STATUS_CODES.NOT_FOUND);
    }
    return user;
};

export const updateUserById = async (id, updateData) => {
    const user = await userRepository.findUserById(id);
    if (!user) {
        throw new AppError(MESSAGES.USER_NOT_FOUND, STATUS_CODES.NOT_FOUND);
    }
    return await userRepository.updateUserById(id, updateData);
};

export const deleteUserById = async (id) => {
    const user = await userRepository.findUserById(id);
    if (!user) {
        throw new AppError(MESSAGES.USER_NOT_FOUND, STATUS_CODES.NOT_FOUND);
    }
    return await userRepository.deleteUserById(id);
};
