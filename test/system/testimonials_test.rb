require "application_system_test_case"

class TestimonialsTest < ApplicationSystemTestCase
  setup do
    @testimonial = testimonials(:one)
  end

  test "visiting the index" do
    visit testimonials_url
    assert_selector "h1", text: "Testimonials"
  end

  test "should create testimonial" do
    visit testimonials_url
    click_on "New testimonial"

    fill_in "Content", with: @testimonial.content
    fill_in "Name", with: @testimonial.name
    fill_in "Product line", with: @testimonial.product_line_id
    fill_in "Website", with: @testimonial.website
    click_on "Create Testimonial"

    assert_text "Testimonial was successfully created"
    click_on "Back"
  end

  test "should update Testimonial" do
    visit testimonial_url(@testimonial)
    click_on "Edit this testimonial", match: :first

    fill_in "Content", with: @testimonial.content
    fill_in "Name", with: @testimonial.name
    fill_in "Product line", with: @testimonial.product_line_id
    fill_in "Website", with: @testimonial.website
    click_on "Update Testimonial"

    assert_text "Testimonial was successfully updated"
    click_on "Back"
  end

  test "should destroy Testimonial" do
    visit testimonial_url(@testimonial)
    click_on "Destroy this testimonial", match: :first

    assert_text "Testimonial was successfully destroyed"
  end
end
