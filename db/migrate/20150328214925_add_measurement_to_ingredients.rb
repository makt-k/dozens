class AddMeasurementToIngredients < ActiveRecord::Migration
  def change
    add_column :ingredients, :measurement, :float
  end
end
