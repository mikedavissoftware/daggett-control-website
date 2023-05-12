class AddOffsetsToTestimonials < ActiveRecord::Migration[7.0]
  def change
    add_column :testimonials, :x_offset, :integer
    add_column :testimonials, :y_offset, :integer
  end
end
