class AddOffsetsToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :x_offset, :integer
    add_column :users, :y_offset, :integer
  end
end
