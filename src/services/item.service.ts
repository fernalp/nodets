import { ItemModel } from "../models/item"
import { Car } from '../types/car.interface';

export const insertCar = async (item: Car) => {
    const responseInsert = await ItemModel.create(item);
    return responseInsert;
};

export const getAllCar = async () => {
    return await ItemModel.find();
};

export const getCarById = async (id: string) => {
    const responseItem = await ItemModel.findOne({ _id: id });
    return responseItem;
};

export const updateCar = async (id: string, data: Car) => {
    const updatedItem = await ItemModel.findOneAndUpdate({ _id: id }, data, { new: true });
    return updatedItem;
}

export const deleteCar = async (id: string) => {
    const { deletedCount } = await ItemModel.deleteOne({ _id: id });
    const response = (deletedCount == 0) ? false : true;
    return response;
}