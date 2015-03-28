
var recipesController = function($scope, $location, $http, recipeData) {

  $scope.recipe = {};

  $scope.recipe.ingredients = [{id: 'ingredient1'}, {id: 'ingredient2'}, {id: 'ingredient3'}, {id: 'ingredient4'}, {id: 'ingredient5'}];

  $scope.addNewIngredient = function() {
      var newItemNo = $scope.recipe.ingredients.length+1;
      $scope.recipe.ingredients.push({'id':'ingredient'+newItemNo});
  };
  $scope.showAddIngredient = function(ingredient) {
   return ingredient.id === $scope.recipe.ingridents[0].id;
  };

  $scope.addRecipe = function(recipe){
   return recipeData.createRecipe(recipe);
  }

};
