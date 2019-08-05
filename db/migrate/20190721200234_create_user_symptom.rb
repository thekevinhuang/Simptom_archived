class CreateUserSymptom < ActiveRecord::Migration[5.2]
  def change
    create_table :user_symptoms do |t|
      t.integer :user_id
      t.integer :symptom_id
    end
  end
end
