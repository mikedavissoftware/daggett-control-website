class ContactFormsController < ApplicationController
  # POST /contact_forms or /contact_forms.json
  def create
    @contact_form = ContactForm.new(contact_form_params)

    if @contact.deliver
      render json: {message: "Email sent successfully"}
    else
      render json: @contact.errors
    end
  end

  private
    # Only allow a list of trusted parameters through.
    def contact_form_params
      params.require(:contact_form).permit(:name, :email, :content)
    end
end
