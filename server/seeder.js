Meteor.startup(function() {

  Meteor.users.remove({});
  Accounts.createUser({
    username: "stanley",
    email: "stanley@berkeley.com",
    password: "password"
  });

  Factory.define('message', Messages, {
    text: function() {
    	return Fake.sentence();
    },
    user: Meteor.users.findOne()._id,
    timestamp: Date.now()
  });

  // Add this if you want to remove all messages before seeding
  Messages.remove({});

  if (Messages.find({}).count() === 0) {
    _(1).times(function(n) {
      Factory.create('message');
    });
  }
});