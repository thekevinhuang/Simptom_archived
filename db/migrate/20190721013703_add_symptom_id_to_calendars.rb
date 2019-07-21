class AddSymptomIdToCalendars < ActiveRecord::Migration[5.2]
  def change
    add_column :calendars, :symptom_id, :integer
  end
end
