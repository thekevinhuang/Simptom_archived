class CreateSymptoms < ActiveRecord::Migration[5.2]
  def change
    create_table :symptoms do |t|
      t.string :name
      t.string :description
      t.string :notes
      t.integer :patient_id
    end
  end
end
