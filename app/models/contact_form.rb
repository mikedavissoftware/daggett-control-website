class ContactForm < MailForm::Base
  attribute :name, validate: true
  attribute :email, validate: /\A[^@\s]+@[^@\s]+\z/i
  attribute :content
  
  def headers
    { 
      #this is the subject for the email generated, it can be anything you want
      subject: "Contact Form Test",
      to: "mike@daggettcontrol.com",
      from: %("#{name}" <#{email}>)
      #the from will display the name entered by the user followed by the email
    }
  end
end