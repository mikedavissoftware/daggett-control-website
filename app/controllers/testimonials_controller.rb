class TestimonialsController < ApplicationController
  skip_before_action :authorize

  def index
    testimonials = Testimonial.all
    render json: testimonials
  end

  def show
    testimonial = Testimonial.find(params[:id])
    render json: testimonial
  end

  def create
    testimonial = Testimonial.create!(testimonial_params)
    render json: testimonial, status: :created
  end

  def update
    testimonial = Testimonial.find(params[:id])
    testimonial.update!(testimonial_params)
    render json: testimonial, status: :ok
  end

  def destroy
    testimonial = Testimonial.find(params[:id])
    testimonial.destroy!
    head :no_content
  end

  private

  def testimonial_params
    params.permit(:name, :content, :website, :image, :product_line_id)
  end

end
