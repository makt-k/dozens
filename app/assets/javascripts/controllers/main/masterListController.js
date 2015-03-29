
var masterListController = function($scope, $location, $http, jsonData) {

  $scope.data = {};

  recipeData.loadRecipes(function(data){
    $scope.data.recipes = data.recipes;
  })

  $scope.viewRecipe = function(recipeID){
     $location.url('/recipe/' + recipeID);
  }

  $scope.navNewRecipe = function(){
      $location.url('/new');
  };
  return recipeData;

};
