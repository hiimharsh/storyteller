angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  $scope.template = TemplateService.changecontent("home");
  $scope.menutitle = NavigationService.makeactive("Home");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

  TemplateService.footer = "";
})

.controller('BlogCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  $scope.template = TemplateService.changecontent("blog");
  $scope.menutitle = NavigationService.makeactive("Blog");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

  TemplateService.footer = "";
})

.controller('UserCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  $scope.template = TemplateService.changecontent("user");
  $scope.menutitle = NavigationService.makeactive("User");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

  TemplateService.footer = "";
})

.controller('headerctrl', function($scope, TemplateService) {
  $scope.template = TemplateService;
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    $(window).scrollTop(0);
  });
})

;
