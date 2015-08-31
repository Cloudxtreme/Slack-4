Meteor.startup(function () {
  smtp = {
    username: 'stanleyliu@berkeley.com',
    password: 'y3Z8TQxpxCiYsJJsCwyV0A',
    server:   'smtp.mandrillapp.com',
    port: 587
  };

  process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
});