import mongoose from'mongoose'
//import validator from 'validator'; // used to validate such as emails etc, like regax
import  bcrypt from 'bcryptjs'; // use to hash passwords
import jwt from'jsonwebtoken'; // use to generate and verify json webtokens
import crypto from 'crypto'; //his is a built-in Node.js module that provides cryptographic 
//functionality. It includes various cryptographic functions and algorithms for tasks such as creating 
//hash digests,generating random bytes, and encrypting/decrypting data


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter Your Name"],
    },
    email: {
        type: String,
        required: [true, "Please Enter Your Email"],
        unique: true,
    },
    gender: {
        type: String,
        required: [true, "Please Enter Gender"]
    },

    password: {
        type: String,
        required: [true, "Please Enter Your Password"],
        minLength: [8, "Password should have atleast 8 chars"],
        select: false, // when access the user from database this doesn't take the password , use for security factor

    },

    avatar: {
        public_id: {
            type: String,
        },
        url: {
            type: String,
        }
    },
    role: {
        type: String,
        default: "user",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },

    resetPasswordToken: String,
    resetPasswordExpire: Date,

})

userSchema.pre("save", async function (next) {

    if (!this.isModified("password")) {
        next();
    }

    this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.getJWTToken = ()=>{
    return jwt.sign({id:this._id} , process.env.JWT_SECRET , {
        expiresIn: process.env.JWT_EXPIRE
    })
}


export default mongoose.model('User' , userSchema)