class ContactMailer < ApplicationMailer
  default from: "contact@daggettcontrol.com"

  def contact_email
    @user = params[:user]
    @url  = 'http://daggettcontrol.com'
    mail(to: "mikedavissoftware@gmail.com", subject: 'Test Contact Email')
  end
end
