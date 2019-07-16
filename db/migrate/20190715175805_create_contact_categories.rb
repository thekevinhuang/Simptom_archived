class CreateContactCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :contact_categories do |t|
      t.string :name
      t.string :description
    end
  end
end
