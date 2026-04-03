const Contact = require("../models/Contact");


const createContact = async(req, res) =>{
    try{

        const {name, email, phone, message }= req.body;

        if(!name || !email || !phone){
            return res.status(400).json({ message : " All fields are required. "});
        }

        const newContact = new Contact({
            name,
            email,
            phone,
            message,
        });

        await newContact.save();
        res.status(201).json({ success : true, message : "Contact details save successfully."});

    }catch(error){
        res.status(500).json({ message : error.message});
    }
}

module.exports = createContact;