const Contact=require('../models/contact') ;
const newComment= require('../mailer/contactmail');

module.exports.feedback= async function(req,res){
    try {
        let contact = await Contact.create({
            email:req.body.email,
            name:req.body.name,
            number:req.body.number,
            content:req.body.message
        });
        await newComment.newComment(contact);
        await newComment.adminUser(contact);
        return res.redirect('back')
    } catch (error) {
        console.log(error)
        return;
    }
}
