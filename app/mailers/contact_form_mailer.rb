class ContactFormMailer < ApplicationMailer

  def new_contact_form_email
    @contact_form = params[:contact_form]

    mail(to: "ron@daggettcontrol.com", subject: "New Contact Form Submission")
  end

end
