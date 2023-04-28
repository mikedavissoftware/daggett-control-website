class ContactFormsController < ApplicationController
  skip_before_action :authorize

  def create
    @contact_form = ContactForm.new(contact_form_params)

    if @contact_form.save
      ContactFormMailer.with(contact_form: @contact_form).new_contact_form_email.deliver_later

      flash[:success] = "Thank you for your email. We will be in touch!"
      redirect_to root_path
    else
      flash.now[:error] = "Something went wrong. Please try again or email us directly at ron@daggettcontrol.com."
      render :new
    end
  end

  private
    # Only allow a list of trusted parameters through.
    def contact_form_params
      params.require(:contact_form).permit(:name, :email, :content)
    end
end
