class ContactFormsController < ApplicationController
  skip_before_action :authorize
  
  # POST /contact_forms or /contact_forms.json
  # def create
  #   puts "the params are"
  #   puts contact_form_params

  #   contact_form = ContactForm.new(contact_form_params)

  #   contact_form.deliver!

  #   status: :created

  #   if contact_form.deliver
  #     render json: {message: "Email sent successfully"}
  #   else
  #     render json: contact_form.errors
  #   end
  # end

  def send_form
    @contact_form = ContactForm.create!(contact_form_params)
    p "name: #{contact_form.name}"
    p "email: #{contact_form.email}"
    p "message: #{contact_form.content}"
    # render json: contact_form, status: :created
  end

  private
    # Only allow a list of trusted parameters through.
    def contact_form_params
      params.permit(:name, :email, :content)
    end
end
