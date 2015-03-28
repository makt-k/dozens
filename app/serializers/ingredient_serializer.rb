class IngredientSerializer < ActiveModel::Serializer
  attributes :id
  has_one :recipe
end
