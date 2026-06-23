import User from "../models/userModel.js";

export const createUser = async (userData) => {
    const newUser = new User(userData);
    return await newUser.save();
};

export const findUserByEmail = async (email) => {
    return await User.findOne({ email });
};

export const findAllUsers = async () => {
    return await User.find();
};

export const findUserById = async (id) => {
    return await User.findById(id);
};

export const updateUserById = async (id, updateData) => {
    return await User.findByIdAndUpdate(id, updateData, { new: true });
};

export const deleteUserById = async (id) => {
    return await User.findOneAndDelete({ _id: id }); // findOneAndDelete takes a filter
};
