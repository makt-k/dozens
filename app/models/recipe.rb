class Recipe < ActiveRecord::Base
  belongs_to :company
  has_many :ingredients
end
