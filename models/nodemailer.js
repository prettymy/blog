/**
 * Created by lmy on 2017/6/2.
 */
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service:'qq',
    port:465,
    secureConnection:true,
    auth:{
        user:'836718437@qq.com',
        pass:'orhvjsmjnesabcig',
    }
});
// send mail with defined transport object

exports.sendmail = function(req,res){
    transporter.sendMail(req.body, function(error, info){
        if(error){
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);

    });
}



