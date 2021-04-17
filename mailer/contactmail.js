const nodemailer =require('../config/nodemailer');


exports.newComment = (contact)=>{
   let htmlString = nodemailer.renderTemplate({contact:contact},'/email.ejs');
    console.log(contact)
  
    nodemailer.transporter.sendMail({
        from:'luciferreal69@gmail.com',
        to:contact.email, // list of receivers
        subject: "Thank you for joining with us!", // Subject line
       
        html: htmlString, // html body
    
    },(err,info)=>{
        if(err){
            console.log('error in sending mail ',err);
            return;
       }
      
       return;  

    })
}


exports.adminUser = (contact)=>{
    
            nodemailer.transporter.sendMail({
            from:'luciferreal69@gmail.com',
            to:'patelviral2021@gmail.com', // list of receivers
            subject: "You get response", // Subject line
           
            html: `Form reciverd from 
	    		<table>
	    			<tr><td>User =>${contact.name}</td></tr>,
				<tr><td>Mobile number=> ${contact.number}</td></tr>,
				<tr><td>email=>${contact.email}</td></tr>
			</table>
		`, // html body
        
        },(err,info)=>{
            if(err){
                console.log('error in sending mail ',err);
                return;
           }
          
           return;  
    
        })
    }
