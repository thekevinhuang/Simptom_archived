class CreateContacts < ActiveRecord::Migration[5.2]
  def change
    create_table :contacts do |t|
      t.integer :contact_category_id
      t.string :name
      t.string :description
      t.string :notes
    end
  end
end
