class Api::AssessmentsController < ApplicationController
  def create
    @assessment = Assessment.new(params)
    render json: @assessment.recommendations.to_json
  end
end