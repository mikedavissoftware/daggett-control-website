class CompanyInfosController < ApplicationController

  def show
    company_info = CompanyInfo.find(params[:id])
    render json: company_info
  end

  def update
    company_info = CompanyInfo.find(params[:id])
    company_info.update!(company_info_params)
  end

  private
  
  def company_info_params
    params.permit(:name, :byline, :bio)
  end

end
