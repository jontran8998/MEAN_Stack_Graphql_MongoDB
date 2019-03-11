import mongoose  from 'mongoose';
import user from '../typeDefs/user';
let Schema = mongoose.Schema;
import { hash } from 'bcryptjs';

//create new model with the same properties in TypeDefs (graphql schema)
let userSchema = new Schema({
    email: String,
    username: String,
    name: String,
    password: String
},
{
    // replacement for createAt or updateAt property.
    timestamps: true
})

userSchema.pre('save', async function(next){
    if(this.isModified('password')){
        try {  this.password =  await hash(this.password, 9)
        } catch (error) {
            next(error)
        }
    } 
    next()
})
export default mongoose.model('User',userSchema);   