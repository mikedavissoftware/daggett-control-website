class ContactFormMailer < ApplicationMailer

  def new_contact_form_email
    @contact_form = params[:contact_form]

    mail(to: ENV["GMAIL_USERNAME"], subject: "New Contact Form Submission")
  end

end
