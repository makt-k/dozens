class RemoveRecipeIdFromIngredients < ActiveRecord::Migration
  def change
    remove_column :ingredients, :recipe_id, :reference
  end
end
