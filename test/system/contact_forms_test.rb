require "application_system_test_case"

class ContactFormsTest < ApplicationSystemTestCase
  setup do
    @contact_form = contact_forms(:one)
  end

  test "visiting the index" do
    visit contact_forms_url
    assert_selector "h1", text: "Contact forms"
  end

  test "should create contact form" do
    visit contact_forms_url
    click_on "New contact form"

    fill_in "Content", with: @contact_form.content
    fill_in "Email", with: @contact_form.email
    fill_in "Name", with: @contact_form.name
    click_on "Create Contact form"

    assert_text "Contact form was successfully created"
    click_on "Back"
  end

  test "should update Contact form" do
    visit contact_form_url(@contact_form)
    click_on "Edit this contact form", match: :first

    fill_in "Content", with: @contact_form.content
    fill_in "Email", with: @contact_form.email
    fill_in "Name", with: @contact_form.name
    click_on "Update Contact form"

    assert_text "Contact form was successfully updated"
    click_on "Back"
  end

  test "should destroy Contact form" do
    visit contact_form_url(@contact_form)
    click_on "Destroy this contact form", match: :first

    assert_text "Contact form was successfully destroyed"
  end
end
