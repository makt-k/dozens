// get data
angular.module('dozens').factory('recipeData',['$http', function($http){
    var recipeData = {recipes: [ ]};
    // method to get all the recipe.
    recipeData.loadRecipes = function(callback){
        $http.get('./recipes.json').success(function(data){
            callback(data);
            console.log('Successfully loaded recipes');
        })
        .error(function(){
            console.log('Failed to load recipes');
        });
    };
    // method to get one recipe by id.
    recipeData.loadSingleRecipe = function(recipeID, callback){
        $http.get('recipes/' + recpieID + '.json')
            .success(function(data){
                callback(data)
                console.log('Successfully loaded recipe ' + recipeID);
            })
            .error(function(){
                console.log('Failed to load recipe ' + recipeID);
            });
    };
    // method to create recipe
    recipeData.createRecipe = function(newRecipe){
     $http.post('./recipes.json', newRecipe).success(function(newRecipe) {
            recipeData.recipes.push(newRecipe);
            return console.log(newRecipe);
        }).error(function() {
            return console.error('Failed to create new recipe.');
        });
        return true;
    };
    return recipeData;
}]);
