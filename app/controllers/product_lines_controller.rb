class ProductLinesController < ApplicationController
  before_action :set_product_line, only: %i[ show edit update destroy ]
  skip_before_action :authorize, only: %i[ index show ]

  def index
    @product_lines = ProductLine.all
  end

  def show
  end

  def new
    @product_line = ProductLine.new
  end

  def edit
  end

  def create
    @product_line = ProductLine.new(product_line_params)

    respond_to do |format|
      if @product_line.save
        format.html { redirect_to product_line_url(@product_line), notice: "Product line was successfully created." }
        format.json { render :show, status: :created, location: @product_line }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @product_line.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @product_line.update(product_line_params)
        format.html { redirect_to product_line_url(@product_line), notice: "Product line was successfully updated." }
        format.json { render :show, status: :ok, location: @product_line }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @product_line.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @product_line.destroy

    respond_to do |format|
      format.html { redirect_to product_lines_url, notice: "Product line was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_product_line
      @product_line = ProductLine.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def product_line_params
      params.require(:product_line).permit(:company, :logo, :description, :website, :image)
    end
end
