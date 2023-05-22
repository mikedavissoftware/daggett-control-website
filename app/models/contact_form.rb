class ContactForm < MailForm::Base
  attribute :name
  attribute :email
  attribute :content

  validates_presence_of [:name, :email, :content]
  validates :email, email: true
  
  def headers
    { 
      #this is the subject for the email generated, it can be anything you want
      subject: "Contact Form",
      to: "ron@daggettcontrol.com",
      from: %("#{name}" <#{email}>)
      #the from will display the name entered by the user followed by the email
    }
  end

end