var recipesController = function($scope, $location, $http, jsonData) {
  $scope.recipe = {};
  $scope.recipe.ingredients = [
    {key: 1}, {key: 2}, {key:3}
  ];

  $scope.addNewIngredient = function() {
      var newItemNo = $scope.recipe.ingredients.length+1;
      $scope.recipe.ingredients.push({'key':newItemNo});
  };

  $scope.addRecipe = function(recipe){
    var ingredients = recipe.ingredients;
    for(var i = 0; i < ingredients.length; i++){
      var ingredient = ingredients[i];
      jsonData.createIngredient(ingredient);
    };

   jsonData.createRecipe(recipe);
  }
};
