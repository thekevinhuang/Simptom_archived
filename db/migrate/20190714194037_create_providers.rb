class CreateProviders < ActiveRecord::Migration[5.2]
  def change
    create_table :providers do |t|
      t.integer :user_id
      t.string :provider_type
    end
  end
end
