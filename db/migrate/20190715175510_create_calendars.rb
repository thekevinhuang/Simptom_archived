class CreateCalendars < ActiveRecord::Migration[5.2]
  def change
    create_table :calendars do |t|
      t.integer :patient_id
      t.string :name
      t.string :description
    end
  end
end
