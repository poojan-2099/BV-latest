//for campaign

module.exports.inform= async function(req,res){
    try {
        res.render('information.ejs',{
            title:"information"
        })
    } catch (error) {
        if (error) {
            console.log('error',error);
            return res.redirect('back')
        }
    }
}






module.exports.home= async function(req,res){
    try {
        res.render('home.ejs',{
            title:"Home"
        })
    } catch (error) {
        if (error) {
            console.log('error',error);
            return res.redirect('back')
        }
    }
}
module.exports.about= async function(req,res){
    try {
        res.render('about.ejs',{
            title:"About"
        })
    } catch (error) {
        if (error) {
            console.log('error',error);
            return res.redirect('back')
        }
    }
}

module.exports.service= async function(req,res){
    try {
        res.render('service.ejs',{
            title:"Service"
        })
    } catch (error) {
        if (error) {
            console.log('error',error);
            return res.redirect('back')
        }
    }
}
module.exports.contact= async function(req,res){
    try {
        res.render('contact.ejs',{
            title:"Contact"
        })
    } catch (error) {
        if (error) {
            console.log('error',error);
            return res.redirect('back')
        }
    }
}
