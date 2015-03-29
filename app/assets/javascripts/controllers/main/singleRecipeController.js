var singleRecipeController = function($scope, $routeParams, $http, jsonData){
    $scope.data = recipeData.recipes[0];

    // Need to pass a callback here, so we wait for the return from the
    // remote service
    jsonData.loadSingleRecipe($routeParams.recipeID, function(data){
        $scope.data.recipe = data.recipe
    });
};
