class ContactForm < MailForm::Base
  attribute :name
  attribute :email
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