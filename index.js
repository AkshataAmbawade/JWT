// const jwt=require ('jsonwebtoken');

// const createToken=async () =>{
//     const token =await jwt.sign({_id:"11223344",name:"Akshata"},"mynameisakshataanandambawadeiamworkinginthewohligitcompanyasadeveloper")
//     console.log(token);

//     const userVerification=await jwt.verify(token,"mynameisakshataanandambawadeiamworkinginthewohligitcompanyasadeveloper")
//     console.log(userVerification);

// }
// createToken();

const jwt = require("jsonwebtoken");

const createToken = async () => {
    const token = await jwt.sign({ _id: "1234567890", name: "Smitali" }, "secretekeyneedtobethereinjwtsign", { expiresIn: '1 second' })
    console.log(token);
    const userVerification = await jwt.verify(token, "secretekeyneedtobethereinjwtsign");
    console.log(userVerification);


}
createToken();







// jwt.sign takes two parameters ( {object }, "string of a secrete key")
// jwt.verify takes two parametes (jwttoken,"string of a secrete key ")
// if you want to add exp date then use expiresIn(mention the time ) it should be mention in the jwt.sign()