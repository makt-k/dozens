var singleRecipeController = function($scope, $routeParams, $http, productData){
    $scope.data = recipeData.recipes[0];

    // Need to pass a callback here, so we wait for the return from the
    // remote service
    recipeData.loadSingleRecipe($routeParams.recipeID, function(data){
        $scope.data.recipe = data.recipe
    });
};
