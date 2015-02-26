Router.configure({
  layoutTemplate: 'AppLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: '404'
});

Router.route('/', function() {
	this.render('Home');
}, {
	name: 'Home'
});

Router.route('/login-wall', function() {
	this.render('LoginWall');
}, {
	name: 'LoginWall',
	controller: 'LoginRequired'
});