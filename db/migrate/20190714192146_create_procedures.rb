class CreateProcedures < ActiveRecord::Migration[5.2]
  def change
    create_table :procedures do |t|
      t.string :name
      t.string :description
      t.integer :patient_id
      t.integer :provider_id
    end
  end
end
