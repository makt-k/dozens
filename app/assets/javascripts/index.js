// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
//= require_self
//= require_tree ./services/main
//= require_tree ./controllers/main

var dozens = angular.module('dozens', ['ngRoute']);

dozens.config(['$routeProvider', function($routeProvider) {
        $routeProvider.
        when('/home', {
            templateUrl: '../assets/home.html',
            controller: 'homeController'
        }).
        when('/new', {
            templateUrl: '../assets/createRecipe.html',
            controller: 'recipesController'
        }).
        when('/masterlist', {
          templateUrl: '../assets/masterlist.html',
          controller: 'masterListController'
        }).
        when('/recipes/:recipeID',{
          templateUrl: '../assets/singleRecipe.html',
          controller: 'singleRecipeController'
        }).
        otherwise({
            redirectTo: '/home'
        });
}]);

dozens.config(['$httpProvider', function(provider) {
    return provider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
    }
]);
