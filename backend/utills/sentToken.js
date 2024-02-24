const sendToken = (user, statusCode, res) => {
    const token = user.getJWTToken();

    const options = {
        expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
        ),
        httpOnly: true //httpOnly: This option is a security feature that, when set to true, 
        //prevents client-side JavaScript from accessing the cookie through document.cookie. 
        //It ensures that the cookie is only accessible via HTTP requests, 
        //making it less susceptible to certain types of attacks, such as cross-site scripting (XSS) attacks.
    }

    res.status(statusCode).cookie('token', token, options).json({
        success: true,
        user,
        token,
    });
}


export default sendToken;