class CreateTestimonials < ActiveRecord::Migration[7.0]
  def change
    create_table :testimonials do |t|
      t.string :name
      t.text :content
      t.string :website
      t.belongs_to :product_line, null: false, foreign_key: true

      t.timestamps
    end
  end
end
