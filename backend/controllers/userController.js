import User from'../models/userModel.js'
import  asyncErrorHandler from '../middlewares/asyncErrorHandler.js'
import  cloudinary from 'cloudinary';

// Register User
export const registerUser = asyncErrorHandler(async (req, res, next) => {

    const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
        folder: "avatars",
        width: 150,
        crop: "scale",
    });  // store avatar in cloudinary

    const { name, email, gender, password } = req.body;

    const user = await User.create({
        name, 
        email,
        gender,
        password,
        avatar: {
            public_id: myCloud.public_id,
            url: myCloud.secure_url,
        },
    });

    sendToken(user, 201, res);

});