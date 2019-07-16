class CreateDays < ActiveRecord::Migration[5.2]
  def change
    create_table :days do |t|
      t.integer :calendar_id
      t.date :date
      t.string :notes
    end
  end
end
