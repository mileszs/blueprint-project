class Api::AssessmentsController < ApplicationController
  def create
    Rails.logger.info(params[:answers])
    @assessment = Assessment.new(params[:answers])
    render json: { recommendations: @assessment.level_2_recommendations }.to_json
  end
end
