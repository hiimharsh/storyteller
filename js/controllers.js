var apiurl = "http://localhost:3000/";

angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout, $http) {
  $scope.template = TemplateService.changecontent("home");
  $scope.menutitle = NavigationService.makeactive("Home");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

  TemplateService.footer = "";

  $http.get(apiurl + "getallusers")
  .success(function(data) {
      $scope.allUsers = data[0].user_blog;
      $scope.userProfile = data[0].user_profilepic;
      console.log(data);
  })
  .error(function(data) {
      console.log('Error: ' + data);
  });
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
