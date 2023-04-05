class CreateProductLines < ActiveRecord::Migration[7.0]
  def change
    create_table :product_lines do |t|
      t.string :company
      t.string :logo
      t.text :description
      t.string :website

      t.timestamps
    end
  end
end
