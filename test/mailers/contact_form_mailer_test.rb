require "test_helper"

class ContactFormMailerTest < ActionMailer::TestCase

  test "new order email" do
    # Set up an order based on the fixture
    contact_form = contact_forms(:one)

    # Set up an email using the contact_form contents
    email = ContactFormMailer.with(contact_form: contact_form).new_contact_form_email

    # Check if the email is sent
    assert_emails 1 do
      email.deliver
    end

    # Check the contents are correct
    assert_equal [ENV['GMAIL_USERNAME']], email.from
    assert_equal [ENV['GMAIL_USERNAME']], email.to
    assert_equal "You got a new contact form submission!", email.subject
    assert_match order.name, email.html_part.body.encoded
    assert_match order.name, email.text_part.body.encoded
    assert_match order.email, email.html_part.body.encoded
    assert_match order.email, email.text_part.body.encoded
    assert_match order.content, email.html_part.body.encoded
    assert_match order.content, email.text_part.body.encoded
  end

end
