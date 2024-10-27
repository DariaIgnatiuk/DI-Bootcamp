const jwt = require('jsonwebtoken');

/** jwt.sign(
 * {userid:12345, name:'Jogn', email: 'jjj@gmail.com'}, -> payload not encrypted!!
 * SECRET / PASSWORD,
 * {expiredIn: "60s"}
 * )
 */


const token = jwt.sign(
    {userid:101, username:'johnjohn', email:'john@gmail.com'},
    "nvdjkfjhe;ow",
    { expiresIn: '2d' }
);

console.log(token);


const myToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjEwMSwidXNlcm5hbWUiOiJqb2huam9obiIsImVtYWlsIjoiam9obkBnbWFpbC5jb20iLCJpYXQiOjE3MzAwMTU0NjMsImV4cCI6MTczMDAxNTU4M30.PRdjXenLhgI6taHszJpzv_60EYjnZtRJ62BQqY_EBek';
/**
 * jwt.verify(
 * token,
 * secret,
 * (error, decoded) => {}
 * )
 */

jwt.verify(token, "nvdjkfjhe;ow", (err, decoded) => {
    if(err){
        return console.log(err.message);
    } else {
        console.log(decoded);
    }
})
