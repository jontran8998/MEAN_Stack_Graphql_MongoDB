import { User } from '../models';
import mongoose from 'mongoose';

export  default {
    Query: {
        users: (root, args, context, info) => {
            return User.find({})
        },
        user: (root, {id}, context, info) => {
            if(!mongoose.Types.ObjectId.isValid(id)){
                throw new Error(`${id} is not correct`)
            }

            return User.findById(id)
        },
    },

    Mutation: {
        signUp: (root, args, context, info) => {
            return User.create(args)
        },
    }
}