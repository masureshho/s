var nodemailer = require('nodemailer');

var transport = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: "masureshho@gmail.com",
    pass: "******"
  }
});
var msg = {
  text: "Hello! This is your newsletter, :D",
  from: "Definitely Not Spammers <masureshho@gmail.com>",
  subject: "Your Newsletter",
  to: "masureshho@hotmail.com"
};
var mainDashboard = {
  dashboardRender: function dashboardRender(req, res) {
    res.render('dashboard/index');
  },
  sendMail: function (req, res) {
    console.log(msg);
    transport.sendMail(msg, function (err, info) {
      if (err) {
        console.log('Sending to ' + msg.to + ' failed: ' + err);
      }
      console.log('Sent to ' + msg.to);
    });
  }
};

module.exports = mainDashboard;