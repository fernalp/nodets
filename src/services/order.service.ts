
import { ItemModel } from "../models/item";



export const getOrders = async () => {
    const responseItem = await ItemModel.find({});
    return responseItem;
}
