class CreateVisits < ActiveRecord::Migration[5.2]
  def change
    create_table :visits do |t|
      t.integer :day_id
      t.integer :patient_id
      t.integer :provider_id
      t.string :notes
      t.integer :symptom_id
    end
  end
end
