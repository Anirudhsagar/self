const authModel = require("../model/authorModel");
const jwt = require("jsonwebtoken");



// create Author

const createAuthor = async (req, res) => {
    try {
        let data = req.body;

        if(Object.keys(data).length === 0){
            return res.status(400).send({message: "Please enter valid data"});
        }
        let {fname, lname , title,email, password} = data;

        if(!fname ||!lname ||!title ||!email ||!password){
            return res.status(400).send({message: "Please fill all the fields"});
        }
        const newEmail = await authModel.findOne({email});
        if(newEmail){
            return res.status(400).send({status: false , message: "Email already exists"});
        }

        if(!['Mr', 'Mrs', 'Miss'].includes(title)){
return res.status(400).send({status: false, message: "Please enter valid title"});
        }

        let author = await authModel.create(data);
        return res.status(200).send({data:author ,status: true, message: "Author created"})

    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}



const loginAuthor = async (req, res) => {
    try {
        let {email, password} = req.body;
        if(!email ||!password){
            return res.status(400).send({message: "email and password are required"});  
        }
        let checkEmail = await authModel.findOne({email:checkEmail});
        if(!checkEmail){
            return res.status(404).send({status: false, message: "please enter valid email"});
        }
        let checkPassword = await authModel.findOne({password:checkPassword});
        if(!checkPassword){
            return res.status(404).send({status: false, message: "please enter valid password"});
        }
        let token = jwt.sign({ID:checkEmail._id}, "Sana mam");
        return res.status(201).send({status:true, data:token, message: "Author logged in"});

    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

module.exports.createAuthor =createAuthor
module.exports.loginAuthor =loginAuthor