Template.Navigation.helpers({
	currentRouteClass: function(routeName) {
		// if name of the current route is the same as routeName, return active
		var currentRouter = Router.current();

		if (currentRouter && currentRouter.route.getName().indexOf(routeName) > -1) {
			return 'active';
		}
		return '';
	}
});