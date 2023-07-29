import { Schema, Types, model, Model } from "mongoose";
import { Car } from '../interface/car.interface';

const ItemSchema = new Schema(
    {
        color: {
            type: String,
            required: true,
        },
        make: {
            type: String,
        },
        model: {
            type: Number,
        },
        year: {
            type: Date,
        },
        price: {
            type: Number,
        },
        description: {
            type: String,
        },
        gas: {
            type: String,
            enum: ["gasoline", "electric"],
            required: true,
        }

    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export const ItemModel = model("items", ItemSchema);