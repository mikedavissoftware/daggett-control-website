# Preview all emails at http://localhost:3000/rails/mailers/contact_form_mailer
class ContactFormMailerPreview < ActionMailer::Preview

  def new_contact_form_email
    # Set up a temporary contact form for the preview
    contact_form = ContactForm.new(name: "Mike Davis", email: "mikedavissoftware@gmail.com", content: "Contact test successfully done!")

    ContactFormMailer.with(contact_form: contact_form).new_contact_form_email
  end

end
