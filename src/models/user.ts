import { Schema, model } from "mongoose";
import { User } from "../interface/user.interface";


const UserSchema = new Schema<User>(
    {
        name: {
            required: true,
            type: String,
        },
        password: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            unique: true,
            lowercase: true,
            trim: true,
            required: true,
        },
        description: {
            type: String,
            default: 'Description Null',
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

export const UserModel = model("users", UserSchema);