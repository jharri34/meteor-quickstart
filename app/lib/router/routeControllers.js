LoginRequired = RouteController.extend({
  onBeforeAction: function() {
    if (Meteor.user()) {
      this.next();
    } else {
      this.render('Login');
    }
  }
});