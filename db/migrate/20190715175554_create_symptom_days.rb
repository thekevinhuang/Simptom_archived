class CreateSymptomDays < ActiveRecord::Migration[5.2]
  def change
    create_table :symptom_days do |t|
      t.integer :days_id
      t.integer :symptom_id
    end
  end
end
