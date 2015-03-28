class CreateRecipes < ActiveRecord::Migration
  def change
    create_table :recipes do |t|
      t.string :name
      t.string :instruction
      t.references :company, index: true

      t.timestamps
    end
  end
end
