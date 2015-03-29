// get data
angular.module('dozens').factory('jsonData',['$http', function($http){
    var jsonData = {recipes: [ ], ingredients:[]};
    // method to get all the recipes.
    jsonData.loadRecipes = function(callback){
        $http.get('./recipes.json').success(function(data){
            callback(data);
            console.log('Successfully loaded recipes');
        })
        .error(function(){
            console.log('Failed to load recipes');
        });
    };
    // method to get all the ingredients.
    jsonData.loadIngredients = function(callback){
        $http.get('./ingredients.json').success(function(data){
            callback(data);
            console.log('Successfully loaded recipes');
        })
        .error(function(){
            console.log('Failed to load recipes');
        });
    };
    // method to get one recipe by id.
    jsonData.loadSingleRecipe = function(recipeID, callback){
        $http.get('recipes/' + recipeID + '.json')
            .success(function(data){
                callback(data)
                console.log('Successfully loaded recipe ' + recipeID);
            })
            .error(function(){
                console.log('Failed to load recipe ' + recipeID);
            });
    };
    jsonData.loadSingleIngredient = function(ingredientID, callback){
        $http.get('ingredients/' + ingredientID + '.json')
            .success(function(data){
                callback(data)
                console.log('Successfully loaded ingredient ' + ingredientID);
            })
            .error(function(){
                console.log('Failed to load ingredient ' + ingredientID);
            });
    };
    // method to create recipe
    jsonData.createRecipe = function(newRecipe){
     $http.post('./recipes.json', newRecipe).success(function(newRecipe) {
            jsonData.recipes.push(newRecipe);
            return console.log(newRecipe);
        }).error(function() {
            return console.error('Failed to create new recipe.');
        });
        return true;
    };
     // method to create ingredient
    jsonData.createIngredient = function(newIngredient){
     $http.post('./ingredients.json', newIngredient).success(function(newIngredient) {
            jsonData.ingredients.push(newIngredient);
            return console.log(newIngredient);
        }).error(function() {
            return console.error('Failed to create new ingredient.');
        });
        return true;
    };

    return jsonData;
}]);
