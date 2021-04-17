const nodemailer= require('nodemailer');
const ejs = require('ejs');
const path = require('path');

let transporter = nodemailer.createTransport({
    
        service:'gmail',
        host:'smtp.gmail.com', 
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: 'luciferreal69@gmail.com', // generated ethereal user
          pass: '8347961590' // generated ethereal password
        }
      
      
});

let renderTemplate =(data,relativePath)=>{
    let mailHTML;
    ejs.renderFile(
    path.join(__dirname,'../views/', relativePath),
    data,
    function(err,template){
        if(err){
            console.log('Err in rendering template');
            return;
        }
        mailHTML=template;
    }
    )
    return mailHTML;
}

module.exports={
    transporter:transporter,
    renderTemplate:renderTemplate
}