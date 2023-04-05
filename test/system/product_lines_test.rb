require "application_system_test_case"

class ProductLinesTest < ApplicationSystemTestCase
  setup do
    @product_line = product_lines(:one)
  end

  test "visiting the index" do
    visit product_lines_url
    assert_selector "h1", text: "Product lines"
  end

  test "should create product line" do
    visit product_lines_url
    click_on "New product line"

    fill_in "Company", with: @product_line.company
    fill_in "Description", with: @product_line.description
    fill_in "Logo", with: @product_line.logo
    fill_in "Website", with: @product_line.website
    click_on "Create Product line"

    assert_text "Product line was successfully created"
    click_on "Back"
  end

  test "should update Product line" do
    visit product_line_url(@product_line)
    click_on "Edit this product line", match: :first

    fill_in "Company", with: @product_line.company
    fill_in "Description", with: @product_line.description
    fill_in "Logo", with: @product_line.logo
    fill_in "Website", with: @product_line.website
    click_on "Update Product line"

    assert_text "Product line was successfully updated"
    click_on "Back"
  end

  test "should destroy Product line" do
    visit product_line_url(@product_line)
    click_on "Destroy this product line", match: :first

    assert_text "Product line was successfully destroyed"
  end
end
